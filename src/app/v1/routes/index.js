const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/register', (req, res) => authController.register (req, res));

module.exports = router;