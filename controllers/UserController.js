const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')
const {User,Marker} = require ('../models/models')

const generateJwt = (id_user,login_user,roleUserIdRole)=>{
    return jwt.sign(
        {id_user,login_user,roleUserIdRole},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController{
    async registration (req,res,next){
        const {login_user,password_user,email,data_registri,roleUserIdRole}= req.body
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

        let roleUserId = roleUserIdRole||1      

        const hashPassword = await bcrypt.hash(password_user,5)
        const user = await User.create({login_user,password_user: hashPassword,email,data_registri,roleUserIdRole:roleUserId})
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
    
}

module.exports=new UserController()