const Router = require('express')
const router = new Router
const titleArtistController = require('../controllers/TitleArtistController')


router.post('/',titleArtistController.create)
router.get('/',titleArtistController.getAll)
router.get('/:id_title_artist',titleArtistController.getOne)
router.put('/',titleArtistController.update)
router.delete('/:id_title_artist', titleArtistController.deleteOne)

module.exports= router