// Import the dependencies
require('dotenv').config();
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
  app.use(express.static(path.join(__dirname, '../client/images')));

  app.use('/graphql',
    expressMiddleware(server, {
      context: authMiddleware,
    })
  );

  // If in the production environment, serve the static files from the React app
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
  }

  // Log the database connection details
  console.log('DB Name: ', process.env.DB_NAME)
  console.log('DB User: ', process.env.DB_USER)
  console.log('DB Password: ', process.env.DB_PASSWORD)

  db.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
}

// Call the startApolloServer function
startApolloServer().catch((err) => {
  console.error('Error starting Apollo Server:', err);
});