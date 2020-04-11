'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan')


app.use(express.json())
app.use(morgan('dev'))

const router = express.Router();

// router.route('/')

//     .get(function (req, res) {
//         res.send('Esta es mi primera ruta con Express 4');
//     });

app.use(express.static('public'))
app.use(router);
app.listen(process.env.PORT || 5000);