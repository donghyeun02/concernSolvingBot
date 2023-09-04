require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const router = require('./routes/concernRouter');

const app = express();

app.use(cors());
app.use(logger('combined'));
app.use(express.json());
app.use(router);

app.listen(3000, function () {
  console.log('server listening on port 3000');
});
