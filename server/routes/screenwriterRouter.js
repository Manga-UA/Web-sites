const Router = require('express')
const router = new Router
const screenwriterController = require('../controllers/ScreenwriterController')


router.post('/',screenwriterController.create)
router.get('/',screenwriterController.getAll)
router.get('/:id_screenwriter',screenwriterController.getOne)
router.put('/',screenwriterController.update)
router.delete('/:id_screenwriter', screenwriterController.deleteOne)

module.exports= router