const uuid = require('uuid')
const path = require('path');
const {Title_data} = require('../models/models');
const ApiError = require('../error/ApiError');

class TitleController{

    async create (req,res,next){
        try {       
        const {name_title,description_title,date_release_title,statusDatumIdStatus,typeTitleIdType} = req.body
        const {image_title} = req.files
        let fileName = uuid.v4()+".jpg"
        image_title.mv(path.resolve(__dirname,'..','static',fileName))

        const titleData = await Title_data.create({
            name_title,
            description_title,
            date_release_title,
            statusDatumIdStatus,
            typeTitleIdType, 
            image_title:fileName
        })
        return res.json(titleData)
            
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
}

module.exports=new TitleController()