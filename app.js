const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');
const app = express();
const Gig = require('./models/Gigs')
const db = require('./config/database');
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

app.get('/',(req , res)=>
{
  console.log('Param var',req.param('id'));
  Gig.findAll()
  .then(gigs =>{
    //console.log(gigs);
    //res.sendStatus(200);
      res.status(200).json({
        msg:'Data received',
        data: gigs,
        status: 200
      })
  })
  .catch(err => console.log( err))
})
app.use(bodyParser.urlencoded());
app.post('/',(req , res)=>
{
  console.log('Body var',req.body);
  Gig.findAll()
  .then(gigs =>{
    //console.log(gigs);
    //res.sendStatus(200);
      res.status(200).json({
        msg:'Data received',
        data: gigs,
        status: 200
      })
  })
  .catch(err => console.log( err))
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));