const Router = require('express')
const router = new Router 
const userRouter = require('./userRouter')
const typeTitleRoutes = require('./typeTitleRoutes')
const statusRoutes = require('./statusRoutes')
const titleRoutes = require('./titleRouter')
const rolesRoutes = require('./rolesRoutes')
const ratingRoutes = require('./ratingRouter')

const artistRouter = require('./artistRouter')
const chapterRouter = require('./chapterRouter')
const genreRouter = require('./genreRouter')
const markerRouter = require('./markerRouter')
const pageRouter = require('./pageRouter')
const screenwriterRouter = require('./screenwriterRouter')
const translateRouter = require('./translateRouter')

router.use('/role',rolesRoutes)
router.use('/user',userRouter)
router.use('/title',titleRoutes)
router.use('/type',typeTitleRoutes)
router.use('/status',statusRoutes)
router.use('/rating',ratingRoutes)

router.use('/translate',artistRouter)
router.use('/chapter',chapterRouter)
router.use('/genre',genreRouter)
router.use('/marker',markerRouter)
router.use('/page',pageRouter)
router.use('/screenwriter',screenwriterRouter)
router.use('/translate',translateRouter)

module.exports= router