const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const compression = require('compression');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger('dev'));
server.use(compression());

server.get('/', (req, res) =>
  res.status(200).json({ status: 200, message: 'Welcome, O loyal developer!' }),
);

module.exports = server;
