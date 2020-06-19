const Sequelize = require('sequelize');
module.exports = new Sequelize('LookForDev', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});