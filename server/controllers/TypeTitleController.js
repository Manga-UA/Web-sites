const {Type_title} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeTitleController{
    async create (req,res){
        const {name_type} = req.body
        const type = await Type_title.create({name_type})
        return res.json(type)
    }

    async getAll (req,res){
        const types = await Type_title.findAll()
        return res.json(types)
    }

    async update(req,res,next){
        try {
            const {id_type,name_type} = req.body
            if(!id_type){
                return next(ApiError.badRequest('not type'))
            }
            let updateType =await Type_title.update({id_type,name_type},{where:{id_type}})
            updateType = await Type_title.findOne({where:{id_user}},)
            return res.json(updateType);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteOne(req,res,next){
        try {
            const {id_type} = req.params
            if(!id_type){
                return next(ApiError.badRequest('not type'))
            }
            let deleteType =await Type_title.destroy({where:{id_type}})
            return res.json(deleteType);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    /*async check (req,res, next){
        const {id}=req.query
        if (!id){
            return next(ApiError.badRequest('No ID'))
        }
        res.json(id);
    }*/
}

module.exports=new TypeTitleController()