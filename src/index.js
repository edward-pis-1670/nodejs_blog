const path = require('path');
const express = require('express');
const port = 3000;
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// HTTP logger

// Template engine
app.engine(
    '.hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resources/views'));

// console.log('PATH', path.join(__dirname,'/resources/views'))

//Home, search, contact

// routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.use(morgan('combined'));
