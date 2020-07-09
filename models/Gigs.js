const Sequelize = require('sequelize');
const db = require('../config/database');
const tableName = 'gigs';
module.exports = ( sequelize, DataTypes) => {
    const Gigs = sequelize.define('Gigs', {
        id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
          },
          title: {
            type: Sequelize.STRING,
            allowNull: false
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
            type: Sequelize.TEXT,
            allowNull: false
          },
          budget: {
            type: Sequelize.STRING,
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
        }, {tableName,timestamps: false});

        Gigs.associate = function(models) {
  
        }
    return Gigs;
}
