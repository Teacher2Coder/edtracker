// Import the dependencies
import express from 'express';
const app = express();
const PORT = 3000;
import { sequelize, testDbConnection } from './config/connection.js';
import routes from './routes/index.js';

// Middleware to parse JSON bodies
app.use(express.json());
app.use(routes);

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
