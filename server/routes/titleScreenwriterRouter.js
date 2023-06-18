const Router = require('express')
const router = new Router
const titleScreenwriterController = require('../controllers/TitleScreenwriterController')


router.post('/',titleScreenwriterController.create)
router.get('/',titleScreenwriterController.getAll)
router.get('/:id_title_screenwriter',titleScreenwriterController.getOne)
router.put('/',titleScreenwriterController.update)
router.delete('/:id_title_screenwriter', titleScreenwriterController.deleteOne)

module.exports= router