const Sequelize = require('sequelize');
const db = require('../config/database');

const Category = db.define('category', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  parent: {
	type: Sequelize.INTEGER,
	allowNull: false
  },
  name: {
	type: Sequelize.STRING,
	allowNull: false
  },
  status: {
    type: Sequelize.BOOLEAN,
	allowNull: false
  },
  timestamp: {
    type: Sequelize.DATE,
	allowNull: false
  }
});

Category.associate = function(models) {
  
}

module.exports = Category;