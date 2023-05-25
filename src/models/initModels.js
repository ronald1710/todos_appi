const Categories = require("./categories.model");
const StatusSubCategories = require ("./statusSubCategories.model")
const SubCategories = require("./subcategories.model");
const Todos = require("./todos.model");
const Users = require("./users.model");

const initModels = () => {
  //todos tiene 1 users
  //users tiene mucho todos
  Todos.belongsTo(Users, { foreignKey: "userId" });
  Users.hasMany(Todos, { foreignKey: "userId" });
  //todos tiene 1 categories
  // categories tienen muchos todos
  Todos.belongsTo(Categories, { foreignKey: "categoryId" })
  Categories.hasMany(Todos, { foreignKey: "categoryId" })
  //subcategories tienen 1 categories
  //categories tiene muchas subcategories
  SubCategories.belongsTo(Categories, { foreignKey: "categoriesId" })
  Categories.hasMany(SubCategories, { foreignKey: "categoriesId" })
  //status tiene 1 todo
  //todo tiene mucho status
  StatusSubCategories.belongsTo(Todos, {onDelete: 'CASCADE',foreignKey:"todosId"})
  Todos.hasMany(StatusSubCategories, {onDelete: 'CASCADE',foreignKey:"todosId"})
  //status tiene 1subcategoria
  //subcategories tienen muchos status
  StatusSubCategories.belongsTo(SubCategories, { onDelete: 'CASCADE',foreignKey: "subCategoriId" })
  SubCategories.hasMany(StatusSubCategories, { onDelete: 'CASCADE',foreignKey: "subCategoriId" })
};

module.exports = initModels;
