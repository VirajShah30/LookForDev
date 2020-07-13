const Sequelize = require('sequelize');
const tableName = 'category';
module.exports = ( sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
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
    }, { tableName, timestamps: false });
    
    Category.associate = function (models) {
        // models.Category.belongsTo(models.Users, { foreignKey: 'user_id' });
    }
    return Category;
}
