const path = require('path');
const express = require('express');
const port = 3000;
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override')
const route = require('./routes');
const db = require('./config/db')

// connect to db
db.connect();
app.use(express.static(path.join(__dirname + '/public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'))
// HTTP logger

// Template engine
app.engine(
    '.hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// console.log('PATH', path.join(__dirname,'/resources/views'))

//Home, search, contact

// routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

app.use(morgan('combined'));
