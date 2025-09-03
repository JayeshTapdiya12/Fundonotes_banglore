import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes';
import {
  appErrorHandler,
  genericErrorHandler,
  notFound
} from './middlewares/error.middleware';
import logger, { logStream } from './config/logger';

import morgan from 'morgan';

const app = express();
const host = '0.0.0.0';  // ✅ Required for Render
const port = process.env.PORT || 3000; // ✅ Use Render’s PORT
const api_version = process.env.API_VERSION;

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('combined', { stream: logStream }));

app.use(`/api/${api_version}`, routes());
app.use(appErrorHandler);
app.use(genericErrorHandler);
app.use(notFound);
app.get('/health', (req, res) => res.send('OK'));
app.get('/', (req, res) => {
  res.json({
    status: "success",
    message: "Fundoo Notes backend is running 🚀",
    docs: `/api/${api_version}`
  });
});
app.listen(port, host, () => {
  logger.info(`Server started at http://${host}:${port}/api/${api_version}/`);
});


export default app;
