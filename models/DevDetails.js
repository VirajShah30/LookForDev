const Sequelize = require('sequelize');
const tableName = 'dev_details';
module.exports = ( sequelize, DataTypes) => {
    const DevDetails = sequelize.define('DevDetails', {
        id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        des: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        achievement: {
            type: Sequelize.STRING,
            allowNull: false
        },
        resume_link: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        experience: {
            type: Sequelize.STRING,
            allowNull: false
        },
        linkedin_link: {
            type: Sequelize.TEXT
        },
        twitter_link: {
            type: Sequelize.TEXT
        },
        facebook_link: {
            type: Sequelize.TEXT
        },
        category_id: {
            type: Sequelize.INTEGER,
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

    DevDetails.associate = function (models) {
        models.DevDetails.belongsTo(models.Users, { foreignKey: 'user_id' });
    }
    return DevDetails;
}