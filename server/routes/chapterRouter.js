const Router = require('express')
const router = new Router
const chapterController = require('../controllers/ChapterController')


router.post('/',chapterController.create)
router.get('/',chapterController.getAll)
router.get('/:id_chapter',chapterController.getOne)
router.put('/',chapterController.update)
router.delete('/:id_chapter', chapterController.deleteOne)

module.exports= router