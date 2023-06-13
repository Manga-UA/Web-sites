const Router = require('express')
const router = new Router 
const typeTitleController = require('../controllers/TypeTitleController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/'/*,checkRole(3)*/,typeTitleController.create)
router.get('/',typeTitleController.getAll)

module.exports = router