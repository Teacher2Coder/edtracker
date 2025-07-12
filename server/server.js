// Import the dependencies
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import path from 'path';

// Import utilities
import { sequelize, testDbConnection, checkDatabaseEmpty } from './config/connection.js';
import { typeDefs, resolvers } from './schemas/index.js';
import auth from './utils/auth.js';
import handleSeedDatabase from './config/seeds.js';

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
  const goodConnection = await testDbConnection();

  // If the connection is good, check database status and start the server
  if (goodConnection) {
    // Check if database is empty
    const dbStatus = await checkDatabaseEmpty();
    
    if (dbStatus.isEmpty === true) {
      if (dbStatus.tableCount === 0) {
        console.log('🔄 Database is empty - will create tables on sync');
      } else {
        console.log('🔄 Database has tables but no data - running seeds...');
        await handleSeedDatabase();
        console.log('✅ Seeding completed');
      }
    } else if (dbStatus.isEmpty === false) {
      console.log('✅ Database is populated and ready');
    }

    sequelize.sync({ force: false }).then(async () => {
      // If we just created tables, check again and seed if needed
      if (dbStatus.tableCount === 0) {
        console.log('🔄 Tables created, checking if seeding is needed...');
        const newDbStatus = await checkDatabaseEmpty();
        if (newDbStatus.isEmpty === true && newDbStatus.tableCount > 0) {
          console.log('🔄 Running seeds after table creation...');
          await handleSeedDatabase();
          console.log('✅ Seeding completed after table creation');
        }
      }
      
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