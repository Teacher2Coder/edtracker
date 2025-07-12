// Import the packages
const Sequelize = require('sequelize');
require('dotenv').config({ path: '../.env' });

// Start sequelize session and pass in values from .env file
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres',
    }
  );

// Function to test the database connection
async function testDbConnection() {
  try {
    await sequelize.authenticate();
    console.log(
      `✅ Connection to database [${process.env.DB_NAME}] on host [${process.env.DB_HOST || 'localhost'}] successful.`
    );
    return true;
  } catch (error) {
    console.error(
      `❌ Unable to connect to the database [${process.env.DB_NAME}] on host [${process.env.DB_HOST || 'localhost'}]:`,
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
