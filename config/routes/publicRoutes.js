const UsersController = require("../../controllers/UsersController");
const DevController = require("../../controllers/DevController");
const CompController = require("../../controllers/CompController");
const CategoryController = require("../../controllers/CategoryController")
const publicRoutes = {
    'POST /signin' : 'UsersController.signin',
    'POST /register' : 'UsersController.register',
    'POST /registerDev' : 'DevController.registerDev',
    'POST /registerComp' : 'CompController.registerComp',
    'POST /getCategories' : 'CategoryController.getCategory'
}

module.exports = publicRoutes;