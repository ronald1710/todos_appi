const db = require('../utils/database')
const { DataTypes } = require ('sequelize')

const StatusCategories = db.define('subcategories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
    sub_category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
    sub_category_name_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
}, {
    timestamps: false
  })

module.exports = StatusCategories