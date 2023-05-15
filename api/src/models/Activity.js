const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define("activity", {
        name: {
            type: DataTypes.STRING,
            allownull: false
        },
        difficulty: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5"),
            allownull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allownull: true
        },
        season: {
            type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring"),
            allownull: false
        }
    }, {
        freezeTableName: true
    })
}