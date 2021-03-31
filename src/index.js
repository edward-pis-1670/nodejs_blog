const path = require('path');
const express = require('express');
const port = 3000;
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override')
const route = require('./routes');
const db = require('./config/db')

const SortMiddleware = require('./app/middlewares/SortMiddleware')

// connect to db
db.connect();
app.use(express.static(path.join(__dirname + '/public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'))
// custom middleware
app.use(SortMiddleware);
// Template engine
app.engine(
    '.hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';
                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending',
                }
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc'
                }
                const icon = icons[sortType]
                const type = types[sortType]
                return `
                        <a href="?_sort&column=${field}&type=${type}">
                            <span class="${icon}"></span>
                        </a>
                `
            }
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
