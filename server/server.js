// Import the dependencies
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

  // Add a simple health check endpoint
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Server is running' });
  });

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }

  // Always start the server first, then handle database operations
  app.listen(PORT, () => {
    console.log(`Now listening at http://localhost:${PORT}`);
    console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
    
    // Handle database operations asynchronously after server starts
    handleDatabaseOperations();
  });

  async function handleDatabaseOperations() {
    try {
      // Test the database connection
      const goodConnection = await testDbConnection();

      if (goodConnection) {
        try {
          // Sync database
          await sequelize.sync({ force: false });
          console.log('✅ Database synced successfully');
          
          // Handle database seeding asynchronously
          await handleDatabaseSetup();
        } catch (syncError) {
          console.error('❌ Error syncing database:', syncError.message);
          console.log('⚠️  Server running without database sync');
        }
      } else {
        console.log('⚠️  Server running without database connection');
      }
    } catch (error) {
      console.error('❌ Database operation error:', error.message);
      console.log('⚠️  Server running despite database errors');
    }
  }
}

// Async function to handle database setup without blocking server startup
async function handleDatabaseSetup() {
  try {
    // Skip seeding in production if environment variable is set
    if (process.env.SKIP_SEEDING === 'true') {
      console.log('🚫 Skipping database seeding (SKIP_SEEDING=true)');
      return;
    }

    // Check if database is empty
    const dbStatus = await checkDatabaseEmpty();
    
    if (dbStatus.isEmpty === true) {
      if (dbStatus.tableCount === 0) {
        console.log('🔄 Database is empty - tables will be created on sync');
      } else {
        console.log('🔄 Database has tables but no data - running seeds...');
        await handleSeedDatabase();
        console.log('✅ Seeding completed');
      }
    } else if (dbStatus.isEmpty === false) {
      console.log('✅ Database is populated and ready');
    }
  } catch (error) {
    console.error('Error during database setup:', error);
    // Don't exit the process, just log the error
  }
}


// Start the server
startServer();