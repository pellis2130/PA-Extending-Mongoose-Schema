// Princess Ellis
// Mongoose Integration Guided Practice

// Load the module dependencies
const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

// Define the Express configuration method
module.exports = function() {

    // Create a new Express application instance
    const app = express();

    // Use the NODE_ENV variable to activate logging or compression
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    // Configure body-parser and method-override
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use(methodOverride());

    // Configure session middleware
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    // Set the application view engine and views folder
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    // Load the index routes
    require('../app/routes/index.server.routes.js')(app);

    // Load the user routes
    require('../app/routes/user.server.routes.js')(app);

    // Configure static file serving
    app.use(express.static('./public'));

    // Return the Express application instance
    return app;
};