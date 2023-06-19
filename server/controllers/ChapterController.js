const uuid = require('uuid')
const path = require('path');
const {Chapter,Page} = require('../models/models');
const ApiError = require('../error/ApiError');

class ChapterController{

    async create (req,res,next){
        try {       
        let {name_chapter,number_chapter,titleDatumIdTitle,masPage} = req.body
        const dateRegist = Date.now()
        const chapterData = await Chapter.create({
            name_chapter,
            number_chapter,
            date_release_chapter:dateRegist,
            titleDatumIdTitle
        })
        console.log("masPage")
        console.log("masPage")
        console.log("masPage")
        console.log("masPage")
        console.log("masPage")
        console.log("masPage")
        console.log("masPage")
        console.log("masPage")
        console.log("masPage")
        console.log("masPage")
        console.log("masPage")
        console.log(masPage)
        if (masPage) {
            masPage = JSON.parse(masPage)
            console.log(masPage)
            masPage.forEach(async i => {
                //let {image} = req.files
                //let fileName = uuid.v4() + ".jpg"
                console.log(i.pageNumber);
                console.log(i.image);
                //i.image.mv(path.resolve(__dirname, '..', 'static', fileName))
                await Page.create({
                    number_page: i.pageNumber,
                    image_page:i.image,
                    chapterDatumIdChapter: chapterData.id_chapter
                })
            })
        }
        return res.json(chapterData)
            
        } catch (e) {
            next(ApiError.badRequest(e.message))            
        }
 

    }

    async getAll (req,res){
        try { 
            let {titleDatumIdTitle} = req.query
            let chapterData;
            if (!titleDatumIdTitle) {
                chapterData = await Chapter.findAndCountAll()
            }
            if (titleDatumIdTitle) {
            chapterData = await Chapter.findAndCountAll({where:{titleDatumIdTitle}})
            }
            return res.json(chapterData)
        } catch (e) {
            next(ApiError.badRequest(e.message))            
        }
    }

    async getOne (req,res){
        const{id_chapter}= req.params
        const chapterData =await Chapter.findOne({
            where:{id_chapter},
            include: [{model: Page, as: 'masPage'}]
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