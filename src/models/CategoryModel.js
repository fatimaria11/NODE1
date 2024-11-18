const connection = require('../config/database/connection')
const { DataTypes } = require('sequelize')

let CategoryModel = connection.define('category', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    use_in_menu: {
        type: DataTypes.BOOLEAN(),
        allowNull: false
    }
})

module.exports = CategoryModel