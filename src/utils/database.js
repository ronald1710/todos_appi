const { Sequelize } = require ('sequelize')
const db = new Sequelize({
  host: 'localhost',
  port: 5432,
  database: 'todos_crud',
  username: 'postgres',
  password: 'Smrs1610',
  dialect: 'postgres'
})

module.exports = db