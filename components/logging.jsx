// -----------------------------------------------------
//           LOGGING (TO BE REPLACED BY SENTRY)
// -----------------------------------------------------
import { createLogger, format, transports } from "winston";
const { combine, timestamp, splat, simple } = format;

const logger = createLogger({
  level: "info",
  format: combine(timestamp(), splat(), simple()),
  transports: [
    //... 'fs' write does not work well in React environment, even screws react-select!
    // - Write logs with level "info" and below to `all.log`
    // - Write logs "error" (and below) to `error.log`.
    // new transports.File({ filename: '../log/error.log', level: 'error' }),
    // new transports.File({ filename: '../log/all.log' })
    new transports.Console()
  ]
});

export default logger;
