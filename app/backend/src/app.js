const express = require('express');
const filmesRouter = require('./routes/filmeRoutes');
const atoresRouter = require('./routes/atorRoutes');
const db = require('./config/database');

const app = express();

app.use(express.json());

app.use('/filmes', filmesRouter);
app.use('/atores', atoresRouter);

module.exports = app;