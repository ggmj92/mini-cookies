const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController')
const {createToken} = require('../controllers/authController');


module.exports = router;