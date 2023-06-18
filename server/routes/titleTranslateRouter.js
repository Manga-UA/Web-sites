const Router = require('express')
const router = new Router
const titleTranslateController = require('../controllers/TitleTranslateController')


router.post('/',titleTranslateController.create)
router.get('/',titleTranslateController.getAll)
router.get('/:id_title_translate',titleTranslateController.getOne)
router.put('/',titleTranslateController.update)
router.delete('/:id_title_translate', titleTranslateController.deleteOne)

module.exports= router