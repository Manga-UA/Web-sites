const Router = require('express')
const router = new Router
const translateController = require('../controllers/TranslateController')


router.post('/',translateController.create)
router.get('/',translateController.getAll)
router.get('/:id_translate',translateController.getOne)
router.put('/',translateController.update)
router.delete('/:id_translate', translateController.deleteOne)

module.exports= router