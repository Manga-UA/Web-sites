const uuid = require('uuid')
const path = require('path');
const {Screenwriter} = require('../models/models');
const ApiError = require('../error/ApiError');

class ScreenwriterController{

    async create (req,res,next){
        try {       
        const {name_screenwriter} = req.body

        const screenwriterData = await Screenwriter.create({
            name_screenwriter
        })
        return res.json(screenwriterData)
            
        } catch (e) {
            next(ApiError.badRequest(e.message))            
        }
 

    }

    async getAll (req,res){
        let {limit, page} = req.query
        page = page||1
        limit = limit||9
        let offset = page*limit-limit
        let screenwriterData;
        screenwriterData = await Screenwriter.findAndCountAll({limit,offset})
        return res.json(screenwriterData)
    }

    async getOne (req,res){
        const{id_screenwriter}= req.params
        const screenwriterData =await Screenwriter.findOne({
            where:{id_screenwriter}
        },)
        return res.json(screenwriterData) 

    }
    async update(req,res,next){
        try {
            const {id_screenwriter,name_screenwriter} = req.body
            if(!id_screenwriter){
                return next(ApiError.badRequest('not screenwriter'))
            }
            let updatePost =await Screenwriter.update({name_screenwriter},{where:{id_screenwriter}})
            updatePost = await Screenwriter.findOne({where:{id_screenwriter}},)
            return res.json(updatePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async deleteOne(req,res,next){
        try {
            const {id_screenwriter} = req.params
            if(!id_screenwriter){
                return next(ApiError.badRequest('not screenwriter'))
            }
            let deletePost =await Screenwriter.destroy({where:{id_screenwriter}})
            return res.json(deletePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports=new ScreenwriterController()