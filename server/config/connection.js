// connection.js
require("dotenv").config({ path: '/Users/ethan/develop/edtracker/.env' });
const Sequelize = require("sequelize");
require("tedious");

// Define environment variables for database connection
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST || 'localhost';

// Initialize Sequelize
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
    dbName,
    dbUser,
    dbPassword,
    {
      host: dbHost,
      dialect: 'postgres',
    }
  );

// Function to test the database connection
async function testDbConnection() {
  try {
    await sequelize.authenticate();
    console.log(
      `✅ Connection to database [${dbName}] on host [${dbHost}] successful.`
    );
    return true;
  } catch (error) {
    console.error(
      `❌ Unable to connect to the database [${dbName}] on host [${dbHost}]:`,
      error
    );
    return false;
  }
}

// Export the sequelize instance for use elsewhere in your application
module.exports = {
  sequelize,
  testDbConnection,
};
