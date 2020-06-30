const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');
const Gig = require('./models/Gigs')
const Users = require('./models/Users')
const Dev = require('./models/Dev_Details')
const Comp = require('./models/Comp_Details')
var cors = require('cors');
const db = require('./config/database');
const User = require('./models/Users');
var app = express();
app.use(cors());

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

app.use(bodyParser.json());

// app.get('/',(req , res)=>
// {
//   //console.log('Param var',req.param('id'));
//   Users.findAll()
//   .then(gigs =>{
//     //console.log(gigs);
//     //res.sendStatus(200);
//       res.status(200).json({
//         msg:'Data received',
//         data: gigs,
//         status: 200
//       })
//   })
//   .catch(err => console.log( err))
// })
// app.post('/',(req , res)=>
// {
//   console.log('Body var',req.body);
//   Gig.findAll()
//   .then(gigs =>{
//     //console.log(gigs);
//     //res.sendStatus(200);
//       res.status(200).json({
//         msg:'Data received',
//         data: gigs,
//         status: 200
//       })
//   })
//   .catch(err => console.log( err))
// })

//User Login
app.post('/login', async(req, res)=>
{
  try{
    const { body } = req;
    const user = await User.findOne({
    where:{
      email : body.email
    }
  })
  console.log(user);
  if(user.password == body.password)
  {
    return res.status(200).json(
      {
        msg: 'User Found',
        data: user,
        status: true
      }
    )
  }
  }
  catch(err)
  {
    return  res.status(500).json({
      err
    })
  }
})

//Basic registration for any user
app.post('/register', async(req , res)=>
{
  const { body } = req;
  console.log('Body var',req.body);
  try{
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
  }
  catch(err)
  {
    return  res.status(500).json({
      err
    })
  }
  
})

//Register Developer
app.post('/dev', async(req , res)=>
{
  const { body } = req;
  console.log('Body var',req.body);
  try{
    const dev = await Dev.create({
      user_id: body.user_id,
      des: body.des,
      achievement: body.achievement,
      resume_link: ' ',
      experience: body.experience,
      linkedin_link: body.linkedin_link,
      twitter_link: body.twitter_link,
      facebook_link: body.facebook_link,
      status:'1',
      category_id:'1',
    });
    if (dev) return res.status(200).json({
      msg: 'Success!',
      data: dev,
      status: true
    })
  }
  catch(err)
  {
    return  res.status(500).json({
      err
    })
  }
  
})

//Register Company
app.post('/comp', async(req , res)=>
{
  const { body } = req;
  console.log('Body var',req.body);
  try{
    const comp = await Comp.create({
      user_id: body.user_id,
      comp_name : body.comp_name,
      comp_logo : ' ',
      des : body.des,
      status : '1'
    });
    if (comp) return res.status(200).json({
      msg: 'Success!',
      data: comp,
      status: true
    })
  }
  catch(err)
  {
    return  res.status(500).json({
      err
    })
  }
  
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));