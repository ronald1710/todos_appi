const Categories = require('../models/categories.model')
const status_subcategories = require ("../models/statusSubCategories.model")
const SubCategories = require ('../models/subcategories.model')
const Todos = require ('../models/todos.model')
const Users = require ('../models/users.model')


const createNewUser = async (req,res) => {
    try {
        const newUser = req.body;
        await Users.create(newUser);
        res.status(201).send();
      } catch (error) {
        res.status(400).json(error);
      }
    }


module.exports = {
    createNewUser,
}