const Router = require('express')
const router = new Router
const titleGenreController = require('../controllers/TitleGenreController')


router.post('/',titleGenreController.create)
router.get('/',titleGenreController.getAll)
router.get('/:id_genre',titleGenreController.getOne)
router.put('/',titleGenreController.update)
router.delete('/:id_genre', titleGenreController.deleteOne)

module.exports= router