const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  full_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  user_avatar: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  gender: {
    type: Sequelize.BOOLEAN
  },
  dob: {
    type: Sequelize.DATE
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  timestamp: {
    type: Sequelize.DATE,
    allowNull: true
  }
}, {timestamps: false});

User.associate = function(models) {
  
}

// Gig.sync().then(() => {
//   console.log('table created');
// });

module.exports = User;