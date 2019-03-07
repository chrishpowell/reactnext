// -------------------------------------
//           LOGGING
// -------------------------------------
import { createLogger, transports } from "winston";

// transports.Console() is fine with react-select, transports.File({ filename: "<alogfile>" }) fails
const logger = createLogger({
  transports: [new transports.File({ filename: "logs/wlog/all.log" })]
});

export default logger;
