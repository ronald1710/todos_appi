const db = require('../utils/database')
const { DataTypes } = require ('sequelize')

const SubCategories = db.define('subcategories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
    name:{
        type: DataTypes.STRING(30),
        allowNull: false
        },
}, {
    timestamps: false
  })

module.exports = SubCategories