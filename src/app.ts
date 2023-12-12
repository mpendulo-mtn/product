// app.js

import express, { Express } from 'express';
import morgan from 'morgan';
import routes from './api/feature1/feature1.route';
import corsMiddleware from './middlewares/corsMiddleware';

const createApp = (): Express => {
  const app: Express = express();

  /** Logging */
  app.use(morgan('dev'));

  /** Parse the request */
  app.use(express.urlencoded({ extended: false }));

  /** Takes care of JSON data */
  app.use(express.json());

  // cors
  app.use(corsMiddleware);

  app.use('/', routes);

  /** Error handling */

  return app;
};

export default createApp;
