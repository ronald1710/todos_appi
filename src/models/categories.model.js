const db = require('../utils/database')
const { DataTypes } = require ('sequelize')

const Categories = db.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
    name:{
        type: DataTypes.STRING(30),
        allowNull: false
        },
    subcategories_id:{
        type: DataTypes.INTEGER,
        allowNull: false
        }
}, {
    timestamps: false
  })

module.exports = Categories