import winston, {format} from 'winston';

const { colorize, combine, timestamp, json } = format;

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

export const buildLogger = (service: string) => {
    return {
        info: (message: string) => logger.info({message, service}),
        error: (message: string) => logger.error({
          message, 
          service,
          at: new Date().toISOString(),
        }),
        warn: (message: string) => logger.warn({message, service}),
        debug: (message: string) => logger.debug({message, service}),
    }
}