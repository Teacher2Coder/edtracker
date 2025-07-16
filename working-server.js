import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import utilities
import { sequelize, testDbConnection, checkDatabaseEmpty } from './server/config/connection.js';
import { typeDefs, resolvers } from './server/schemas/index.js';
import auth from './server/utils/auth.js';
import handleSeedDatabase from './server/config/seeds.js';

const app = express();
const PORT = process.env.PORT || 3001;
const authMiddleware = auth.authMiddleware;

// Instantiate the Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  try {
    // Start Apollo Server
    await server.start();
    
    // Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    
    // GraphQL endpoint
    app.use(
      '/graphql', 
      expressMiddleware(server, {
        context: authMiddleware
      })
    );

    // Health check endpoint
    app.get('/health', (req, res) => {
      res.status(200).json({ status: 'ok', message: 'Server is running' });
    });

    // Serve React app in production
    if (process.env.NODE_ENV === "production") {
      app.use(express.static(path.join(__dirname, "client/dist")));

      app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client/dist/index.html"));
      });
    }

    // Start the server first
    app.listen(PORT, () => {
      console.log(`🚀 Server listening on port ${PORT}`);
      console.log(`📊 GraphQL endpoint: http://localhost:${PORT}/graphql`);
      console.log(`❤️  Health check: http://localhost:${PORT}/health`);
      
      // Handle database operations asynchronously
      handleDatabaseOperations();
    });

  } catch (error) {
    console.error('❌ Server startup error:', error);
    // Even if Apollo fails, start a basic server
    app.get('/health', (req, res) => {
      res.json({ status: 'error', message: 'Server started with errors' });
    });
    
    app.listen(PORT, () => {
      console.log(`⚠️  Server listening on port ${PORT} (with errors)`);
    });
  }
}

async function handleDatabaseOperations() {
  try {
    console.log('🔄 Testing database connection...');
    const goodConnection = await testDbConnection();

    if (goodConnection) {
      try {
        console.log('🔄 Syncing database...');
        await sequelize.sync({ force: false });
        console.log('✅ Database synced successfully');
        
        // Handle seeding only if not skipped
        if (process.env.SKIP_SEEDING !== 'true') {
          console.log('🔄 Checking database seeding...');
          const dbStatus = await checkDatabaseEmpty();
          if (dbStatus.isEmpty) {
            console.log('🌱 Database empty, running seeds...');
            await handleSeedDatabase();
            console.log('✅ Seeding completed');
          } else {
            console.log('✅ Database already populated');
          }
        } else {
          console.log('⏭️  Database seeding skipped');
        }
      } catch (syncError) {
        console.error('❌ Database sync error:', syncError.message);
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

// Start the server
startServer(); 