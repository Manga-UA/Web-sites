const Router = require('express')
const router = new Router 
const typeTitleController = require('../controllers/TypeTitleController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/'/*,checkRole(2)*/,typeTitleController.create)
router.get('/',typeTitleController.getAll)
router.put('/', typeTitleController.update)

module.exports = router