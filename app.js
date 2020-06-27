const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');

const Gig = require('./models/Gigs')
const Users = require('./models/Users')
var cors = require('cors');
const db = require('./config/database');

var app = express();
app.use(cors());

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

app.get('/',(req , res)=>
{
  //console.log('Param var',req.param('id'));
  Users.findAll()
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
app.post('/register', async(req , res)=>
{
  const { body } = req;
  console.log('Body var',req.body);
  const user = await Users.create({
    email: body.email,
    password: body.password,
    full_name: body.full_name,
    gender: body.gender,
    role: body.role,
    dob: body.dob,
    status: 1,
    user_avatar: '',
  });
  if (user) return res.status(200).json({
    msg: 'Success!',
    data: user,
    status: true
  })
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));