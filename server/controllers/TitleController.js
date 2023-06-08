const uuid = require('uuid')
const path = require('path');
const {Title_data,TitleTranslate} = require('../models/models');
const ApiError = require('../error/ApiError');

class TitleController{

    async create (req,res,next){
        try {       
        const {name_title,description_title,date_release_title,statusDatumIdStatus,typeTitleIdType,translateDatumIdTranslate} = req.body
        const {image_title} = req.files
        let fileName = uuid.v4()+".jpg"
        const dateRelease = date_release_title|| Date.now()
        image_title.mv(path.resolve(__dirname,'..','static',fileName))

        const titleData = await Title_data.create({
            name_title,
            description_title,
            date_release_title: dateRelease,
            statusDatumIdStatus,
            typeTitleIdType, 
            image_title:fileName
        })
        /*const translateTitle = await TitleTranslate.create({
            titleDatumIdTitle: res.titleData{id_title},
            translateDatumIdTranslate
        })*/
        return res.json(titleData,translateTitle)

            
        } catch (e) {
            next(ApiError.badRequest(e.message))            
        }
 

    }

    async getAll (req,res){
        let {statusDatumIdStatus, typeTitleIdType, limit, page} = req.query
        page = page||1
        limit = limit||9
        let offset = page*limit-limit
        let titleData;
        if (!statusDatumIdStatus && !typeTitleIdType) {
            titleData = await Title_data.findAndCountAll({limit,offset})
        }
        if (statusDatumIdStatus && !typeTitleIdType) {
            titleData = await Title_data.findAndCountAll({where:{statusDatumIdStatus},limit,offset})
        }
        if (!statusDatumIdStatus && typeTitleIdType) {
            titleData = await Title_data.findAndCountAll({where:{typeTitleIdType},limit,offset})
        }
        if (statusDatumIdStatus && typeTitleIdType) {
            titleData = await Title_data.findAndCountAll({where:{tytypeTitleIdTypepeId, statusDatumIdStatus},limit,offset})
        }
        return res.json(titleData)
    }

    async getOne (req,res){
        const{id_title}= req.params
        const titleData =await Title_data.findOne({
            where:{id_title}
        },)
        return res.json(titleData) 

    }
    async update(req,res,next){
        try {
            const {id_title,name_title,description_title,date_release_title,statusDatumIdStatus,typeTitleIdType} = req.body
            if(!id_title){
                return next(ApiError.badRequest('not login or password'))
            }
            let updatePost =await Title_data.update({name_title,description_title,date_release_title,statusDatumIdStatus,typeTitleIdType},{where:{id_title}})
            updatePost = await Title_data.findOne({where:{id_title}},)
            return res.json(updatePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async deleteOne(req,res,next){
        try {
            const {id_title} = req.params
            if(!id_title){
                return next(ApiError.badRequest('not login or password'))
            }
            let deletePost =await Title_data.destroy({where:{id_title}})
            return res.json(deletePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports=new TitleController()