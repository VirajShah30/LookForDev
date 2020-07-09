const Sequelize = require('sequelize');
const tableName = 'users';
module.exports = ( sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
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
  }, { tableName, timestamps: false });

  Users.associate = function (models) {
    models.Users.hasMany(models.DevDetails, { foreignKey: 'user_id' });
    models.Users.hasMany(models.CompDetails, { foreignKey: 'user_id' });
  }
  return Users;
}
