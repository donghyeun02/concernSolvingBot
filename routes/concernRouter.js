const express = require('express');
const concernService = require('../services/concernService');

const router = express.Router();

router.post('/chat', concernService.generateRespones);

module.exports = router;
