const Categories = require('../models/categories.model')
const status_subcategories = require ("../models/statusSubCategories.model")
const SubCategories = require ('../models/subcategories.model')
const Todos = require ('../models/todos.model')
const Users = require ('../models/users.model')


const createNewTodo = async (req, res) => {
    try {
      const newTodo = req.body;
      await Todos.create(newTodo);
      res.status(201).send();
    } catch (error) {
        res.status(400).json(error);
    }
  };

const getTodosByUserCategory = async(req,res) =>{
    try {
        const {id} = req.params
        const todo = await Users.findAll({
            where: { id },
            attributes: {
                exclude: ["password"]
            },
            include:{ 
                model:Todos,
                attributes: {
                    exclude: ["userId", "categoryId"]
                },
                include: [{
                    model: Categories,
                    include:[
                        {
                            model: SubCategories,
                        }
                    ]
                },
                ],
            },
        })
        res.json(todo)
    } catch (error) {
        res.status(400).json(error);
    }
}

const updateStatusCompleted = async (req, res) =>{
    try {
        const { userId } = req.params
        const {  id, completed } = req.body
        await Todos.update(
            {  id, completed },
            {where: { userId, id },}
        )
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteTodos = async(req,res) => {
    try {
        const { id }= req.params
        await Todos.destroy({
            where: {id}
        })
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
}



  module.exports = {
    createNewTodo,
    getTodosByUserCategory,
    updateStatusCompleted, 
    deleteTodos
  }