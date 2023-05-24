const db = require('../utils/database')
const { DataTypes } = require ('sequelize')

const Todos = db.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
    title:{
        type: DataTypes.STRING(50),
        allowNull: false
        },
    description:{
        type: DataTypes.TEXT,
        },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        defaultValue: false,
        },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id'
        },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
        }
}, {
    timestamps: false
  })

module.exports = Todos