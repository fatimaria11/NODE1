const connection = require('../config/database/connection')
const { DataTypes } = require('sequelize')

let ProductModel = connection.define('product', {
  nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cor: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(50),
        allowNull: false
    }

})

module.exports = ProductModel
