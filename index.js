const express = require('express');
const path = require('path');
const app = express();
const logger = require('./logger');

const PORT = 5000;
app.listen(() => {
  // console.log(`app runing on ${PORT}`);
  logger.log('info', `Server runing on ${PORT}`);
});
