const express = require('express');
// const winston = require('winston');
const app = express();
const pjson = require('./package.json');
const { logger } = require('./logger');

// serve static files
app.use(express.static('public'));

const PORT = 4000;
logger.info(`${pjson.name} runing on ${PORT}`);
logger.log('hello');
