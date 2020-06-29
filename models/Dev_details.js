const Sequelize = require('sequelize');
const db = require('../config/database');

const Dev = db.define('dev_details', {
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
    type: Sequelize.TEXT,
    allowNull: false
  },
  achievement: {
    type: Sequelize.STRING,
    allowNull: false
  },
  resume_link: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  experience: {
    type: Sequelize.STRING,
    allowNull: false
  },
  linkedin_link: {
    type: Sequelize.TEXT
  },
  twitter_link: {
    type: Sequelize.TEXT
  },
  facebook_link: {
    type: Sequelize.TEXT
  },
  category_id: {
    type: Sequelize.INTEGER,
    allowNull: false
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

Dev.associate = function(models) {
  
}

// Gig.sync().then(() => {
//   console.log('table created');
// });

module.exports = Dev;