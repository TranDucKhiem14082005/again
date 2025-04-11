const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/login', (req, res) => {
    console.log('Client is calling the server API');
    res.json({messsage: 'This is information of client!'});
})

app.use('/v1/auth', require('./app/v1/routes')); // Use the auth routes

module.exports = app; // Export the app for testing purposes