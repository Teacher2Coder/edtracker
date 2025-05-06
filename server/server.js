// Import the dependencies
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import path from 'path';

// Import utilities
import { sequelize, testDbConnection } from './config/connection.js';
import { typeDefs, resolvers } from './schemas/index.js';
import auth from './utils/auth.js';

// Define key variables
const app = express();
const PORT = process.env.PORT || 3001;
const authMiddleware = auth.authMiddleware;

// Instantiate the Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Define StartServer function
const startServer = async () => {
  await server.start();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(
    '/graphql', 
    expressMiddleware(server, {
      context: authMiddleware
    })
  );

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }

  // Test the database connection
  const goodConnection = testDbConnection();

  // If the connection is good, start the server
  if (goodConnection) {
    sequelize.sync({ force: false }).then(() => {
      app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
    }).catch((err) => {
      console.error('Error syncing database:', err);
    });
  } else {
    console.error('Database connection failed. Server not started.');
    process.exit(1);
  }
}


// Start the server
startServer();