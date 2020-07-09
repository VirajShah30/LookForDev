const Sequelize = require('sequelize');
const tableName = 'comp_details';
module.exports = ( sequelize, DataTypes) => {
    const CompDetails = sequelize.define('CompDetails', {
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

    CompDetails.associate = function (models) {
        models.CompDetails.belongsTo(models.Users, { foreignKey: 'user_id' });
    }
    return CompDetails;
}