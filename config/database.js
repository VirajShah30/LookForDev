const Sequelize = require('sequelize');
module.exports = new Sequelize('lookForDev', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});