// Import the dependencies
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');

const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// Define startApolloServer
const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Serve up static assets
  app.use("/images", express.static(path.join(__dirname, '../client/images')));

  app.use(
    '/graphql',
    expressMiddleware(server, {
      context: authMiddleware,
    })
  );

  // If in the production environment, serve the static files from the React app
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.sync({ force: false })
  .then(() => {
    console.log('Database synced successfully.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
}

// Test the database connection before starting the server
db.testDbConnection().then(() => {
  console.log('Database connection test completed.');
}).catch((error) => {
  console.error('Error testing database connection:', error);
  process.exit(1); // Exit if the database connection fails
});

// Call the startApolloServer function
startApolloServer().catch((err) => {
  console.error('Error starting Apollo Server:', err);
});