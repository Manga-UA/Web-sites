const {Role_user} = require('../models/models')
const ApiError = require('../error/ApiError')

class RolesController{

    async create (req,res){
        const {name_role} = req.body
        const roleData = await Role_user.create({name_role})
        return res.json(roleData)
    }

    async getAll (req,res){
        const roleData = await Role_user.findAll()
        return res.json(roleData)
    }
}

module.exports=new RolesController()