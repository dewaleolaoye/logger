const { createLogger, transports, format } = require('winston');
const { colorize, combine, simple, timestamp } = format;

const logger = createLogger({
  transports: [
    new transports.Console({
      level: 'info',
      format: combine(
        timestamp({ format: 'DD-MM-YYYY h:mm:ssa' }),
        simple(),
        colorize({
          colors: {
            info: 'blue',
            errors: 'red',
          },
          level: true,
          message: true,
          all: true,
        })
      ),
    }),

    new transports.File({
      filename: 'filelog',
      level: 'info',
      format: combine(
        timestamp({ format: 'DD-MM-YYYY h:mm:ssa' }),
        simple(),
        colorize({
          colors: {
            info: 'blue',
            errors: 'red',
          },
          level: true,
          message: true,
          all: true,
        })
      ),
    }),
  ],
});

module.exports = logger;
