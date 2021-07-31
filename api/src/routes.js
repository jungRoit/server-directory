import express from 'express';

import directoryController from './controllers/directoryController';

const Router = express.Router();

Router.get('/', (req, res, next) => {
  res.json({ message: 'welcome to the API' });
});

Router.use('/directories',directoryController);

export default Router;
