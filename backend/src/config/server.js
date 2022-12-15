// 01 - Neste arquivo vamos configurar o servidor do nosso backend.
const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');
const queryParser = require('express-query-int');

server.use(bodyParser.urlencoded({ extend: true }));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser());

server.listen(port, () => {
    console.log(`BACKEND is running on port ${port}`);
})

module.exports = server;