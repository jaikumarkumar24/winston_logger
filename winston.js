const winston = require('winston');

const logConfiguration  = {
    transports:[
        new winston.transports.Console({
            level: 'warn'
        }),
        new winston.transports.File({
            level: 'error',
            // Create the log directory if it does not exist
            filename: 'logs/example.log'
        })
    ]
};

const logger = winston.createLogger(logConfiguration);

logger.error("Hello, Winston logger, the first error!");
logger.warn("Hello, Winston logger, the first warning!");
logger.warn("Hello, Winston logger, the second warning!");
logger.error("Hello, Winston logger, the second error!");
logger.info("Hello, Winston logger, some info!");
logger.debug("Hello, Winston logger, a debug!");