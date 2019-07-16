const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const compression = require('compression');

const server = express();
const router = require('./router');
const { badUrl } = require('./middleware');

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger('dev'));
server.use(compression());

server.get('/', (req, res) =>
  res.status(200).json({ status: 200, message: 'Welcome, O loyal developer!' }),
);

server.use('/api/cars', router);
server.use(badUrl);

module.exports = server;
