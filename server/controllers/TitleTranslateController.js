const uuid = require('uuid')
const path = require('path');
const {TitleTranslate} = require('../models/models');
const ApiError = require('../error/ApiError');

class TitleTranslateController{

    async create (req,res,next){
        try {       
        const {titleDatumIdTitle,translateDatumIdTranslate} = req.body
        if (!userDatumIdUser || !titleDatumIdTitle) {
            return next(ApiError.badRequest('not user or title'))
        }
        const data = await TitleTranslate.create({
            titleDatumIdTitle,
            translateDatumIdTranslate
        })
        return res.json(data)
            
        } catch (e) {
            next(ApiError.badRequest(e.message))            
        }
 

    }

    async getAll (req,res){
        let {titleDatumIdTitle,translateDatumIdTranslate, limit, page} = req.query
        page = page||1
        limit = limit||9
        let offset = page*limit-limit
        let titleTraslateData;
        if (!titleDatumIdTitle || !translateDatumIdTranslate) {
            titleTraslateData = await TitleTranslate.findAndCountAll({limit,offset})
        }
        if (titleDatumIdTitle && !translateDatumIdTranslate) {
            titleTraslateData = await TitleTranslate.findAndCountAll({where:{titleDatumIdTitle},limit,offset})
        }
        if (!titleDatumIdTitle && translateDatumIdTranslate) {
            titleTraslateData = await TitleTranslate.findAndCountAll({where:{translateDatumIdTranslate},limit,offset})
        }
        if (titleDatumIdTitle && translateDatumIdTranslate) {
            titleTraslateData = await TitleTranslate.findAndCountAll({where:{titleDatumIdTitle, translateDatumIdTranslate},limit,offset})
        }
        return res.json(titleTraslateData)
    }

    async getOne (req,res){
        try{
            const{id_title_translate}= req.params
            const postData =await TitleTranslate.findOne({
                where:{id_title_translate}
            },)
            return res.json(postData) 
        }
        catch(e){
            next(ApiError.badRequest(e.message))
        }

    }
    async update(req,res,next){
        try {
            const {id_title_translate,titleDatumIdTitle,translateDatumIdTranslate} = req.body
            if(!id_title_translate){
                return next(ApiError.badRequest('not marker'))
            }
            let updatePost =await TitleTranslate.update({titleDatumIdTitle,translateDatumIdTranslate},{where:{id_title_translate}})
            updatePost = await TitleTranslate.findOne({where:{id_title_translate}},)
            return res.json(updatePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async deleteOne(req,res,next){
        try {
            const {id_title_translate} = req.params
            if(!id_title_translate){
                return next(ApiError.badRequest('not marker'))
            }
            let deletePost =await TitleTranslate.destroy({where:{id_title_translate}})
            return res.json(deletePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports=new TitleTranslateController()