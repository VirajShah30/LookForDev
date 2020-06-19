const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');
const app = express();

const db = require('./config/database');
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

app.get('/',(req , res)=>res.send('hi mayank'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));