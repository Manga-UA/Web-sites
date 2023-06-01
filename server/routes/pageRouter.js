const Router = require('express')
const router = new Router
const pageController = require('../controllers/PageController')


router.post('/',pageController.create)
router.get('/',pageController.getAll)
router.get('/:id_page',pageController.getOne)
router.put('/',pageController.update)
router.delete('/:id_page', pageController.deleteOne)

module.exports= router