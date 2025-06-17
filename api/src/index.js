/* eslint-disable import/no-extraneous-dependencies */
const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
require('express-async-errors');

const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');
const routes = require('./routes');
const { env } = require('./config/env');

const app = express();

//* BodyParse
app.use(express.json());

//* CORS
app.use(cors);

//* Rotas da aplicação
app.use(routes);

//* Error handler
app.use(errorHandler);

//* Rota da aplicação
app.listen(env.port || 3001, () =>
  console.log(`🚀 Server started at http://localhost:${env.port}`),
);
