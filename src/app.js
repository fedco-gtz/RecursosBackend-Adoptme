import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';

import config from './config/config.js';
import logger from './utils/loggers.js';
import swaggerOptions from './utils/swaggerDocs.js';

import addLogger from './middlewares/logger.middleware.js';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';


const app = express();
const PORT = config.app.PORT;

const CONNECTION_STRING = config.mongo.URL;
const connection = mongoose.connect(CONNECTION_STRING)

app.use(express.json());
app.use(cookieParser());
app.use(addLogger)

const specs = swaggerJSDoc(swaggerOptions)

app.use('/apidocs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks',mocksRouter);

app.listen(PORT,()=> logger.info(`Servidor escuchando en http://localhost:${PORT}`))
