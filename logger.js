const winston = require('winston');
const moment = require('moment');

// const consoleLogger = new winston.transports.Console({
//   timestamp: function () {
//     const today = moment();
//     return today.format('DD-MM-YYYY h:mm:ssa');
//   },

// });

// const logger = new winston.Logger

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

module.exports.logger = logger;
