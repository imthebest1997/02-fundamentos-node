const winston = require('winston');

const { colorize, combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    // colorize(),
    json(),
  ),
  // defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// If we're not in production then log to the `console` with the format:
logger.add(new winston.transports.Console({
  format: winston.format.simple(),
}));


module.exports = function buildLogger(service) {
    return {
        info: (message) => logger.info({message, service}),
        error: (message) => logger.error({
          message, 
          service,
          at: new Date().toISOString(),
        }),
        warn: (message) => logger.warn({message, service}),
        debug: (message) => logger.debug({message, service}),
    }
}