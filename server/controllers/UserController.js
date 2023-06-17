const uuid = require('uuid')
const path = require('path');
const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')
const {User,Marker} = require ('../models/models')
var date = new Date();
const image = 'userIcon.jpg'

const generateJwt = (id_user,login_user,roleUserIdRole,image_user)=>{
    return jwt.sign(
        {id_user,login_user,roleUserIdRole,image_user},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController{
    async registration (req,res,next){
        const {login_user,password_user,email,roleUserIdRole,translateDatumIdTranslate}= req.body
        if (!login_user||!password_user){
            return next(ApiError.badRequest('не вказано логін чи пароль'))
        }
        let candidate = await User.findOne({where:{login_user}})
        if(candidate){
            return next(ApiError.badRequest('такий логін вже зайнятий'))
        }
        candidate = await User.findOne({where:{email}})
        if (candidate){
            return next(ApiError.badRequest('такий email вже зайнятий'))
        }

        let roleUserId = roleUserIdRole|| 3   
        let translateDatumId= translateDatumIdTranslate||null 

        const hashPassword = await bcrypt.hash(password_user,5)
        const dateRegist = Date.now()
        const user = await User.create({
            login_user,
            password_user: hashPassword,
            email,
            data_registration: dateRegist,
            roleUserIdRole:roleUserId,
            translateDatumIdTranslate:translateDatumId,
            image_user:image
        })
        //const marker = await Marker.create({userDatumIdUser: user.id_user})
        const token = generateJwt(user.id_user,user.login_user,user.roleUserIdRole,user.image_user)
        return res.json({token})

    }

    async login (req,res,next){
        const {login_user, password_user} = req.body
        const user = await User.findOne({where: {login_user}})
        if (!user) {
            return next(ApiError.internal('Користувача не знайдено'))
        }
        let comparePassword = bcrypt.compareSync(password_user, user.password_user)
        if (!comparePassword) {
            return next(ApiError.internal('Вказано неправильний пароль'))
        }
        const token = generateJwt(
            user.id_user,
            user.login_user,
            user.roleUserIdRole,
            user.image_user
            )
        return res.json({token})
    }

    async check(req, res, next) {

        const token = generateJwt(
            req.user.id_user,
            req.user.login_user, 
            req.user.roleUserIdRole,
            req.user.image_user
            )
        return res.json({token})
    }

    async update(req,res,next){
        try {
            const {id_user,login_user,password_user} = req.body
            const {image_user} = req.files
            if(!id_user){
                return next(ApiError.badRequest('not login or password'))
            }
            const hashPassword = await bcrypt.hash(password_user,5)
            
            let fileName = uuid.v4()+".jpg"
            image_user.mv(path.resolve(__dirname,'..','static',fileName))

            let updateUser =await User.update({
                password_user: hashPassword,
                image_user: fileName
            },{where:{id_user}})
            updateUser = await User.findOne({where:{id_user}},)
            return res.json(updateUser);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updateImage(req,res,next){
        try {
            const {id_user} = req.body
            const {image_user} = req.files
            if(!id_user){
                return next(ApiError.badRequest('not login or password'))
            }
            //const hashPassword = await bcrypt.hash(password_user,5)
            
            let fileName = uuid.v4()+".jpg"
            image_user.mv(path.resolve(__dirname,'..','static',fileName))

            let updateUser =await User.update({
                image_user: fileName
            },{where:{id_user}})
            updateUser = await User.findOne({where:{id_user}},)
            return res.json(updateUser);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async updatePassword(req,res,next){
        try {
            const {id_user,password_user} = req.body
            if(!id_user){
                return next(ApiError.badRequest('not login or password'))
            }
            const hashPassword = await bcrypt.hash(password_user,5)
            
            let updateUser =await User.update({
                password_user: hashPassword
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