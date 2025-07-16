import express from 'express';
import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import utilities
import { sequelize, testDbConnection, checkDatabaseEmpty } from './server/config/connection.js';
import { typeDefs, resolvers } from './server/schemas/index.js';
import auth from './server/utils/auth.js';
import handleSeedDatabase from './server/config/seeds.js';

const app = express();
const HTTP_PORT = process.env.PORT || 3001;
const HTTPS_PORT = 3002;
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
      res.status(200).json({ 
        status: 'ok', 
        message: 'Server is running',
        protocol: req.protocol,
        secure: req.secure
      });
    });

    // Serve React app in production
    if (process.env.NODE_ENV === "production") {
      app.use(express.static(path.join(__dirname, "client/dist")));

      app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client/dist/index.html"));
      });
    }

    // Start HTTP server (required for EB health checks)
    const httpServer = http.createServer(app);
    httpServer.listen(HTTP_PORT, () => {
      console.log(`🚀 HTTP Server listening on port ${HTTP_PORT}`);
      console.log(`📊 GraphQL endpoint: http://localhost:${HTTP_PORT}/graphql`);
      console.log(`❤️  Health check: http://localhost:${HTTP_PORT}/health`);
    });

    // Try to start HTTPS server with self-signed certificate
    try {
      const certPath = path.join(__dirname, 'ssl-cert', 'edutracker-cert.pem');
      const keyPath = path.join(__dirname, 'ssl-cert', 'edutracker-key.pem');
      
      if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
        const options = {
          cert: fs.readFileSync(certPath),
          key: fs.readFileSync(keyPath)
        };
        
        const httpsServer = https.createServer(options, app);
        httpsServer.listen(HTTPS_PORT, () => {
          console.log(`🔒 HTTPS Server listening on port ${HTTPS_PORT}`);
          console.log(`🔐 HTTPS Health check: https://localhost:${HTTPS_PORT}/health`);
          console.log(`⚠️  Note: Self-signed certificate will show browser warnings`);
        });
      } else {
        console.log(`📋 HTTPS disabled: Certificate files not found`);
      }
    } catch (httpsError) {
      console.log(`📋 HTTPS disabled: ${httpsError.message}`);
    }

    // Handle database operations asynchronously
    handleDatabaseOperations();

  } catch (error) {
    console.error('❌ Server startup error:', error);
    // Even if Apollo fails, start a basic HTTP server
    app.get('/health', (req, res) => {
      res.json({ status: 'error', message: 'Server started with errors' });
    });
    
    http.createServer(app).listen(HTTP_PORT, () => {
      console.log(`⚠️  HTTP Server listening on port ${HTTP_PORT} (with errors)`);
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