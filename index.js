'use strict';

// paquetes
const express = require('express');
const app = express();
const morgan = require('morgan');

// settings
app.set('view engine', 'ejs');

// middlewars
app.use(express.json());
app.use(morgan('dev'));

// rutas

app.use(express.static('public'));

// Puerto

app.listen(process.env.PORT || 5000);