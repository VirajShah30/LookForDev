const Sequelize = require('sequelize');
const db = require('../config/database');
// const Users = require('Users');

const Comp = db.define('comp_details', {
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

Comp.associate = function(models) {
  // Comp.belongsTo(Users, {foreignKey: 'user_id'});
}

module.exports = Comp;