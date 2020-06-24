const Sequelize = require('sequelize');
const db = require('../config/database');

const Dev = db.define('dev', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  des: {
    type: Sequelize.STRING,
    allowNull: false
  },
  achievement: {
    type: Sequelize.STRING,
    allowNull: false
  },
  resume_link: {
    type: Sequelize.STRING,
    allowNull: false
  },
  experience: {
    type: Sequelize.STRING,
    allowNull: false
  },
  linkedin_link: {
    type: Sequelize.STRING
  },
  twitter_link: {
    type: Sequelize.STRING
  },
  facebook_link: {
    type: Sequelize.STRING
  },
  category_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  status: {
    type: Sequelize.BOOLEAN
  },
  timestamp: {
    type: Sequelize.DATE
  }
});

Dev.associate = function(models) {
  
}

// Gig.sync().then(() => {
//   console.log('table created');
// });

module.exports = Dev;