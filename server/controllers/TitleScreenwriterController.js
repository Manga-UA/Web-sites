const uuid = require('uuid')
const path = require('path');
const {TitleScreenwriter} = require('../models/models');
const ApiError = require('../error/ApiError');

class TitleScreenwriterController{

    async create (req,res,next){
        try {       
        const {titleDatumIdTitle,screenwriterDatumIdScreenwriter} = req.body

        const data = await TitleScreenwriter.create({
            titleDatumIdTitle,
            screenwriterDatumIdScreenwriter
        })
        return res.json(data)
            
        } catch (e) {
            next(ApiError.badRequest(e.message))            
        }
 

    }

    async getAll (req,res){
        let {titleDatumIdTitle,screenwriterDatumIdScreenwriter, limit, page} = req.query
        page = page||1
        limit = limit||9
        let offset = page*limit-limit
        let data;
        if (!titleDatumIdTitle && !screenwriterDatumIdScreenwriter) {
            data = await TitleScreenwriter.findAndCountAll({limit,offset})
        }
        if (titleDatumIdTitle && !screenwriterDatumIdScreenwriter) {
            data = await TitleScreenwriter.findAndCountAll({where:{titleDatumIdTitle},limit,offset})
        }
        if (!titleDatumIdTitle && screenwriterDatumIdScreenwriter) {
            data = await TitleScreenwriter.findAndCountAll({where:{screenwriterDatumIdScreenwriter},limit,offset})
        }
        if (titleDatumIdTitle && screenwriterDatumIdScreenwriter) {
            data = await TitleScreenwriter.findAndCountAll({where:{titleDatumIdTitle, screenwriterDatumIdScreenwriter},limit,offset})
        }
        return res.json(data)
    }

    async getOne (req,res){
        const{id_title_screenwriter}= req.params
        const data =await TitleScreenwriter.findOne({
            where:{id_title_screenwriter}
        },)
        return res.json(data) 

    }
    async update(req,res,next){
        try {
            const {id_title_screenwriter,titleDatumIdTitle,screenwriterDatumIdScreenwriter} = req.body
            if(!id_title_screenwriter){
                return next(ApiError.badRequest('not record'))
            }
            let updatePost =await TitleScreenwriter.update({titleDatumIdTitle,screenwriterDatumIdScreenwriter},{where:{id_title_screenwriter}})
            updatePost = await TitleScreenwriter.findOne({where:{id_title_screenwriter}},)
            return res.json(updatePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async deleteOne(req,res,next){
        try {
            const {id_title_screenwriter} = req.params
            if(!id_title_screenwriter){
                return next(ApiError.badRequest('not record'))
            }
            let deletePost =await TitleScreenwriter.destroy({where:{id_title_screenwriter}})
            return res.json(deletePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports=new TitleScreenwriterController()