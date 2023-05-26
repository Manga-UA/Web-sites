const Router = require('express')
const router = new Router
const titleController = require('../controllers/TitleController')


router.post('/',titleController.create)
router.get('/',titleController.getAll)
router.get('/:id_title',titleController.getOne)

module.exports= router