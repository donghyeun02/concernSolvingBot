// app.js
require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(logger('combined'));
app.use(express.json());

app.listen(3000, function () {
  console.log('server listening on port 3000');
});

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});
