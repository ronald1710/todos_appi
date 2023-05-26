const Categories = require('../models/categories.model')
const StatusSubCategories = require('../models/statusSubCategories.model')
const status_subcategories = require ("../models/statusSubCategories.model")
const SubCategories = require ('../models/subcategories.model')
const Todos = require ('../models/todos.model')
const Users = require ('../models/users.model')


const createNewTodo = async (req, res) => {
    try {
      const {subCategoriId, ...newTodo} = req.body;
      const todo = await Todos.create(newTodo);
      await StatusSubCategories.create({subCategoriId, todosId: todo.id});
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
            include:[{ 
                model:Todos,
                attributes: {
                    exclude: ["userId", "categoryId"]
                },
                include: [{
                    model: Categories,
                },{
                    model: status_subcategories,
                    attributes:{
                        exclude: [ "subCategoriId", "todosId" ]
                    },
                    include:{model: SubCategories,
                    attributes: ["name"]}
                    
                }],
            },],
        })
        res.json(todo)
    } catch (error) {
        console.log(error)
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