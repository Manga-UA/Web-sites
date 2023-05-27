const Router = require('express')
const router = new Router
const titleController = require('../controllers/TitleController')


router.post('/',titleController.create)
router.get('/',titleController.getAll)
router.get('/:id_title',titleController.getOne)
router.put('/',titleController.update)
router.delete('/:id_title', titleController.deleteOne)

module.exports= router