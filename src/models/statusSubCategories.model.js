const db = require('../utils/database')
const { DataTypes } = require ('sequelize')

const StatusSubCategories = db.define('status_sub_categories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
    subCategoriId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'sub_category_id'
        },
    todosId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'todos_id'
        }
}, {
    timestamps: false
  })

module.exports = StatusSubCategories