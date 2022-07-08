const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
    code: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
})

module.exports = Product