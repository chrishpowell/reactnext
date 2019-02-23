// -------------------------------------
//           LOGGING
// -------------------------------------
import {createLogger, format, transports} from "winston";
const {combine, timestamp, splat, simple} = format;

const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        splat(),
        simple()
  ),
    transports: [
      //
      // - Write logs with level "info" and below to `all.log` 
      // - Write logs "error" (and below) to `error.log`.
      new transports.File({ filename: '../log/error.log', level: 'error' }),
      new transports.File({ filename: '../log/all.log' })
    ]
  });
   
  //
  // If we're not in production then log to the console
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
      format: simple()
    }));
  }

  export default logger;