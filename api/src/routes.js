import express from 'express';

const Router = express.Router();

Router.get('/', (req, res, next) => {
  res.json({ message: 'welcome to the API' });
});

Router.use('/directories', ()=>{});

export default Router;
