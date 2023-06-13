const Router = require('express')
const router = new Router
const ratingController = require('../controllers/RatingController')


router.post('/',ratingController.create)
router.get('/',ratingController.getAll)
router.get('/:id_rating',ratingController.getOne)
router.put('/',ratingController.update)
router.delete('/:id_rating', ratingController.deleteOne)

module.exports= router