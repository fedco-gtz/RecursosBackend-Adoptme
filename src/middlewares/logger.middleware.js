import logger from "../utils/loggers.js";

const addLogger = (req, res, next) =>{
    req.logger =  logger;
    req.logger.info(`${req.method} at ${req.url} - ${new Date().toLocaleDateString()}`);
    next();
}

export default addLogger