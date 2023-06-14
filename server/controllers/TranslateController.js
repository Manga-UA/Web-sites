const uuid = require('uuid')
const path = require('path');
const {Translate} = require('../models/models');
const ApiError = require('../error/ApiError');

class TranslateController{

    async create (req,res,next){
        try {       
        const {name_translate,description_translate,data_registration} = req.body
        const dateRegistri = data_registration || Date.now()
        const {image_translate} = req.files
        let fileName = uuid.v4()+".jpg"
        image_translate.mv(path.resolve(__dirname,'..','static',fileName))
        const translateData = await Translate.create({
            name_translate,
            description_translate,
            data_registration:dateRegistri,
            image_translate:fileName
        })
        return res.json(translateData)
            
        } catch (e) {
            next(ApiError.badRequest(e.message))            
        }
 

    }

    async getAll (req,res){
        let {limit, page} = req.query
        page = page||1
        limit = limit||9
        let offset = page*limit-limit
        let translateData;
        translateData = await Translate.findAndCountAll({limit,offset})
        return res.json(titleData)
    }

    async getOne (req,res){
        const{id_translate}= req.params
        const translateData =await Translate.findOne({
            where:{id_translate}
        },)
        return res.json(translateData) 

    }
    async update(req,res,next){
        try {
            const {id_translate,name_translate,description_translate/*,data_registration*/} = req.body
            const {image_translate} = req.files
            let fileName = uuid.v4()+".jpg"
            image_translate.mv(path.resolve(__dirname,'..','static',fileName))
            if(!id_translate){
                return next(ApiError.badRequest('not translate'))
            }
            let updatePost =await Translate.update({
                name_translate,
                description_translate,
                //data_registration:dateRegistri,
                image_translate:fileName
            },{where:{id_translate}})
            updatePost = await Translate.findOne({where:{id_translate}},)
            return res.json(updatePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async deleteOne(req,res,next){
        try {
            const {id_translate} = req.params
            if(!id_translate){
                return next(ApiError.badRequest('not translate'))
            }
            let deletePost =await Translate.destroy({where:{id_translate}})
            return res.json(deletePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports=new TranslateController()