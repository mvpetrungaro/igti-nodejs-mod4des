const Sequelize = require('sequelize')

const db = new Sequelize(
  process.env.DB_CONN_STRING,
  {
    dialect: 'postgres',
    logging: false
  }
)

module.exports = db