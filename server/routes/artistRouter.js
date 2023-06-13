const Router = require('express')
const router = new Router
const artistController = require('../controllers/ArtistController')


router.post('/',artistController.create)
router.get('/',artistController.getAll)
router.get('/:id_artist',artistController.getOne)
router.put('/',artistController.update)
router.delete('/:id_artist', artistController.deleteOne)

module.exports= router