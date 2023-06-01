const Router = require('express')
const router = new Router
const genreController = require('../controllers/GenreController')


router.post('/',genreController.create)
router.get('/',genreController.getAll)
router.get('/:id_genre',genreController.getOne)
router.put('/',genreController.update)
router.delete('/:id_genre', genreController.deleteOne)

module.exports= router