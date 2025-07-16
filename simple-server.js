import express from 'express';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Test database connection
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
    process.env.DB_NAME || 'edutracker_db',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      dialect: 'postgres',
      logging: false,
    }
  );

async function testDbConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection successful');
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    return false;
  }
}

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Simple server with DB test is working!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Health check passed' });
});

app.get('/db-test', async (req, res) => {
  const dbWorking = await testDbConnection();
  res.json({ 
    status: dbWorking ? 'ok' : 'error', 
    message: dbWorking ? 'Database connection works' : 'Database connection failed' 
  });
});

// Test DB on startup but don't exit if it fails
testDbConnection().then(dbWorking => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log(`Database status: ${dbWorking ? 'Connected' : 'Failed'}`);
  });
}).catch(error => {
  console.error('Startup error:', error);
  // Start anyway
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} (DB test failed)`);
  });
}); 