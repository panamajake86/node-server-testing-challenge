const express = require('express');

const apiRouter = require('./api-router');

const server = express();

server.use('/api', apiRouter);

server.get('/', (req, res) => {
    res.json('Testing is something')
});

module.exports = server;