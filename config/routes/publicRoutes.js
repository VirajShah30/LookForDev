const UsersController = require("../../controllers/UsersController");

const publicRoutes = {
    'POST /signin' : 'UsersController.signin'
}

module.exports = publicRoutes;