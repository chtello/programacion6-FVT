const express = require('express');
const path = require('path');
const morgan = require('morgan');
const myRouter = require('./routes/myRouter');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Agrego un enrutador compatible
app.use('/', myRouter);

module.exports = app;