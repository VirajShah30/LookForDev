const Sequelize = require('sequelize');
const db = require('../config/database');

const Comp_details = db.define('comp_details', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
	type: Sequelize.INTEGER,
	allowNull: false
  },
  comp_name: {
	type: Sequelize.STRING,
	allowNull: false
  },
  comp_logo: {
	type: Sequelize.TEXT,
	allowNull: false
  },
  des: {
	type: Sequelize.TEXT,
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

Comp_details.associate = function(models) {
  
}

module.exports = Comp_details;