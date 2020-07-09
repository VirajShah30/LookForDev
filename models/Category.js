const Sequelize = require('sequelize');
const tableName = 'category';
module.exports = ( sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
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
    }, { tableName, timestamps: false });
    
    Category.associate = function (models) {
        // models.Category.belongsTo(models.Users, { foreignKey: 'user_id' });
    }
    return Category;
}
