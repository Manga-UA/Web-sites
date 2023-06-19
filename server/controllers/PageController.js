const uuid = require('uuid')
const path = require('path');
const {Page} = require('../models/models');
const ApiError = require('../error/ApiError');

class PageController{

    async create (req,res,next){
        try {       
        const {number_page,chapterDatumIdChapter} = req.body
        const {image_page} = req.files
        let fileName = uuid.v4()+".jpg"
        image_page.mv(path.resolve(__dirname,'..','static',fileName))

        const pageData = await Page.create({
            number_page,
            chapterDatumIdChapter,
            image_page:fileName
        })
        return res.json(pageData)
            
        } catch (e) {
            next(ApiError.badRequest(e.message))            
        }
     }

    async getAll (req,res){
        let {chapterDatumIdChapter, limit, page} = req.query
        page = page||1
        limit = limit||9
        let offset = page*limit-limit
        let pageData;
        if (!chapterDatumIdChapter) {
            pageData = await Page.findAndCountAll({limit,offset})
        }
        if (chapterDatumIdChapter) {
            pageData = await Page.findAndCountAll({where:{chapterDatumIdChapter},limit,offset})
        }
        return res.json(pageData)
    }

    async getOne (req,res){
        const{id_page}= req.params
        const pageData =await Page.findOne({
            where:{id_page}
        },)
        return res.json(pageData) 
    }
    async update(req,res,next){
        try {
            const {id_page,number_page,chapterDatumIdChapter} = req.body
            const {image_page} = req.files
            if(!id_page){
                return next(ApiError.badRequest('not login or password'))
            }
            if(!image_page){
                
            }
            else{
                let fileName = uuid.v4()+".jpg"
                image_page.mv(path.resolve(__dirname,'..','static',fileName))
            }
            let updatePost =await Page.update({number_page,chapterDatumIdChapter},{where:{id_page}})
            updatePost = await Page.findOne({where:{id_page}},)
            return res.json(updatePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async deleteOne(req,res,next){
        try {
            const {id_page} = req.params
            if(!id_page){
                return next(ApiError.badRequest('not page'))
            }
            let deletePost =await Page.destroy({where:{id_page}})
            return res.json(deletePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports=new PageController()