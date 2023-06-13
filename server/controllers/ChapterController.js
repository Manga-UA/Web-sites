const uuid = require('uuid')
const path = require('path');
const {Chapter} = require('../models/models');
const ApiError = require('../error/ApiError');

class ChapterController{

    async create (req,res,next){
        try {       
        const {name_chapter,number_chapter,date_release_chapter,titleDatumIdTitle} = req.body

        const chapterData = await Chapter.create({
            name_chapter,
            number_chapter,
            date_release_chapter,
            titleDatumIdTitle
        })
        return res.json(chapterData)
            
        } catch (e) {
            next(ApiError.badRequest(e.message))            
        }
 

    }

    async getAll (req,res){
        let {titleDatumIdTitle, limit, page} = req.query
        page = page||1
        limit = limit||9
        let offset = page*limit-limit
        let chapterData;
        if (!titleDatumIdTitle) {
            chapterData = await Chapter.findAndCountAll({limit,offset})
        }
        if (titleDatumIdTitle) {
            chapterData = await Chapter.findAndCountAll({where:{titleDatumIdTitle},limit,offset})
        }
        return res.json(chapterData)
    }

    async getOne (req,res){
        const{id_chapter}= req.params
        const chapterData =await Chapter.findOne({
            where:{id_chapter}
        },)
        return res.json(chapterData) 

    }
    async update(req,res,next){
        try {
            const {id_chapter,name_chapter,number_chapter,date_release_chapter,titleDatumIdTitle} = req.body
            if(!id_chapter){
                return next(ApiError.badRequest('not login or password'))
            }
            let updatePost =await Chapter.update({name_chapter,number_chapter,date_release_chapter,titleDatumIdTitle},{where:{id_chapter}})
            updatePost = await Chapter.findOne({where:{id_chapter}},)
            return res.json(updatePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async deleteOne(req,res,next){
        try {
            const {id_chapter} = req.params
            if(!id_chapter){
                return next(ApiError.badRequest('not login or password'))
            }
            let deletePost =await Chapter.destroy({where:{id_chapter}})
            return res.json(deletePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports=new ChapterController()