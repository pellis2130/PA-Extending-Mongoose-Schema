// Princess Ellis
// Mongoose Integration Guided Practice

// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the module dependencies
const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');

// Create a new Mongoose connection instance
const db = configureMongoose();

// Create a new Express application instance
const app = configureExpress();

// Use the Express application instance to listen to port 3000
app.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost:3000/');

// Export the Express application
module.exports = app;