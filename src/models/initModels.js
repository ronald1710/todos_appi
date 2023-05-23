const Categories = require("./categories.model");
const StatusCategories = require("./statusCategories.model");
const SubCategories = require("./subcategories.model");
const Todos = require("./todos.model");
const Users = require("./users.model");

const initModels = () => {
  //todos tiene 1 users
  //users tiene mucho todos
  Todos.belongsTo(Users, { foreignkey: "userId" });
  Users.hasMany(Todos, { foreignkey: "userId" });
  //todos tiene 1 categories
  // categories tienen muchos todos
  Todos.belongsTo(Categories, { foreignkey: "categoryId" })
  Categories.hasMany(Todos, { foreignkey: "categoryId" })
  //categories tiene 1 subcategories
  //subcategories tienen muchos categories
  Categories.belongsTo(SubCategories, { foreignkey: "subcategoryId" })  
  SubCategories.hasMany(Categories, { foreignkey: "subcategoryId" }) 
  
  
};

module.exports = initModels;
