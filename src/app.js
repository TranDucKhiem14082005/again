const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());




app.use('/v1/auth', require('./app/v1/routes')); // Use the auth routes

module.exports = app; // Export the app for testing purposes

