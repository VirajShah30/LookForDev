// const CompController = require("../../controllers/CompController");
// const GigsController = require("../../controllers/GigsController");
// const DevController = require("../../controllers/DevController");
const privateRoutes = {
    'POST /compDetails' : 'CompController.compDetails',
    'POST /devDetails' : 'DevController.devDetails',
    'POST /addGigs' : 'GigsController.addGigs',
    'POST /getCompGigs' : 'GigsController.getCompGigs',
    'POST /getDevGigs' : 'GigsController.getDevGigs'
}

module.exports = privateRoutes;