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

    /*async check (req,res, next){
        const {id}=req.query
        if (!id){
            return next(ApiError.badRequest('No ID'))
        }
        res.json(id);
    }*/
}

module.exports=new TypeTitleController()