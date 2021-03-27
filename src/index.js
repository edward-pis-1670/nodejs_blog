
const path = require('path')
const express = require('express');
const port = 3000;
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');


app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname)
// HTTP logger

// Template engine
app.engine('.hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'/resources/views'))

// console.log('PATH', path.join(__dirname,'/resources/views'))


app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(morgan('combined'))