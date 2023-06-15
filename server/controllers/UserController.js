const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')
const {User,Marker} = require ('../models/models')
var date = new Date();

const generateJwt = (id_user,login_user,roleUserIdRole)=>{
    return jwt.sign(
        {id_user,login_user,roleUserIdRole},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController{
    async registration (req,res,next){
        const {login_user,password_user,email,roleUserIdRole,translateDatumIdTranslate}= req.body
        if (!login_user||!password_user){
            return next(ApiError.badRequest('not login or password'))
        }
        let candidate = await User.findOne({where:{login_user}})
        if(candidate){
            return next(ApiError.badRequest('login busy'))
        }
        candidate = await User.findOne({where:{email}})
        if (candidate){
            return next(ApiError.badRequest('email busy'))
        }

        let roleUserId = roleUserIdRole|| 3   
        let translateDatumId= translateDatumIdTranslate||null 

        const hashPassword = await bcrypt.hash(password_user,5)
        const dateRegist = Date.now()
        const user = await User.create({login_user,password_user: hashPassword,email,data_registration: dateRegist,roleUserIdRole:roleUserId,translateDatumIdTranslate:translateDatumId})
        //const marker = await Marker.create({userDatumIdUser: user.id_user})
        const token = generateJwt(user.id_user,user.login_user,user.roleUserIdRole)
        return res.json({token})

    }

    async login (req,res,next){
        const {login_user, password_user} = req.body
        const user = await User.findOne({where: {login_user}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password_user, user.password_user)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id_user,user.login_user,user.roleUserIdRole)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id_user, req.user.login_user, req.user.roleUserIdRole)
        return res.json({token})
    }

    async update(req,res,next){
        try {
            const {id_user,login_user,password_user,email,description_user,} = req.body
            const {image_user} = req.files
            if(!id_user){
                return next(ApiError.badRequest('not login or password'))
            }
            const hashPassword = await bcrypt.hash(password_user,5)
            
            let fileName = uuid.v4()+".jpg"
            image_user.mv(path.resolve(__dirname,'..','static',fileName))

            let updateUser =await User.update({
                login_user,
                password_user: hashPassword,
                email,
                description_user,
                image_user: fileName
            },{where:{id_user}})
            updateUser = await User.findOne({where:{id_user}},)
            return res.json(updateUser);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteOne(req,res,next){
        try {
            const {id_user} = req.params
            if(!id_user){
                return next(ApiError.badRequest('not login or password'))
            }
            let deleteUser =await User.destroy({where:{id_user}})
            return res.json(deleteUser);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll (req,res){
        let userData;
        userData = await User.findAndCountAll({})
        return res.json(userData)
    }
}

module.exports=new UserController()