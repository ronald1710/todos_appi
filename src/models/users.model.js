const db = require('../utils/database')
const { DataTypes } = require ('sequelize')

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        },
    username: {
        type: DataTypes.STRING(30),
        unique: true
        },
    email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
            }
        },
    password: {
        type: DataTypes.STRING,
        allowNull: false
        },
}, {
    timestamps: false
  })

module.exports = Users