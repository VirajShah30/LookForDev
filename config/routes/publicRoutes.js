const UsersController = require("../../controllers/UsersController");
const DevController = require("../../controllers/DevController");
const CompController = require("../../controllers/CompController");
const publicRoutes = {
    'POST /signin' : 'UsersController.signin',
    'POST /register' : 'UsersController.register',
    'POST /registerDev' : 'DevController.registerDev',
    'POST /registerComp' : 'CompController.registerComp',
}

module.exports = publicRoutes;