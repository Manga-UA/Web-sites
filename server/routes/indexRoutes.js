const Router = require('express')
const router = new Router 
const userRouter = require('./userRouter')
const typeTitleRoutes = require('./typeTitleRoutes')
const statusRoutes = require('./statusRoutes')
const titleRoutes = require('./titleRouter')
const rolesRoutes = require('./rolesRoutes')

router.use('/role',rolesRoutes)
router.use('/user',userRouter)
router.use('/title',titleRoutes)
router.use('/type',typeTitleRoutes)
router.use('/status',statusRoutes)


module.exports= router