const Router = require('express')
const router = new Router
const markerController = require('../controllers/MarkerController')


router.post('/',markerController.create)
router.get('/',markerController.getAll)
router.get('/:id_marker',markerController.getOne)
router.put('/',markerController.update)
router.delete('/:id_marker', markerController.deleteOne)

module.exports= router