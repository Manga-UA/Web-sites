const {Status_data} = require('../models/models')
const ApiError = require('../error/ApiError')

class StatusController{

    async create (req,res){
        const {name_status} = req.body
        const statusData = await Status_data.create({name_status})
        return res.json(statusData)
    }

    async getAll (req,res){
        const statusData = await Status_data.findAll()
        return res.json(statusData)
    }
}

module.exports=new StatusController()