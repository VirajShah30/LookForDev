const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  fullname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  user_avatar: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.BOOLEAN
  },
  dob: {
    type: Sequelize.DATE
  },
  status: {
    type: Sequelize.BOOLEAN
  },
  timestamp: {
    type: Sequelize.DATE
  }
});

User.associate = function(models) {
  
}

// Gig.sync().then(() => {
//   console.log('table created');
// });

module.exports = User;