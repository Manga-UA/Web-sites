const Router = require('express')
const router = new Router 
const userController = require('../controllers/UserController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration',userController.registration)
router.post('/login',userController.login)
router.get('/auth',authMiddleware,userController.check)
router.put('/',userController.update)
router.put('/image',userController.updateImage)
router.put('/password',userController.updatePassword)
router.delete('/:id_user', userController.deleteOne)

router.get('/',userController.getAll)

module.exports= router