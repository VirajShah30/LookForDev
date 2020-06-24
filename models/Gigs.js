const Sequelize = require('sequelize');
const db = require('../config/database');

const Gig = db.define('gig', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING
  },
  category_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  comp_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  desc: {
    type: Sequelize.STRING
  },
  budget: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.BOOLEAN
  },
  timestamp: {
    type: Sequelize.DATE
  }
});

Gig.associate = function(models) {
  
}

// Gig.sync().then(() => {
//   console.log('table created');
// });

module.exports = Gig;