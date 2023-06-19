const uuid = require('uuid')
const path = require('path');
const {Marker} = require('../models/models');
const ApiError = require('../error/ApiError');

class MarkerController{

    async create (req,res,next){
        try {       
        const {userDatumIdUser,titleDatumIdTitle} = req.body
        if (!userDatumIdUser || !titleDatumIdTitle) {
            return next(ApiError.badRequest('not user or title'))
        }
        const markerData = await Marker.create({
            userDatumIdUser,
            titleDatumIdTitle
        })
        return res.json(markerData)
            
        } catch (e) {
            next(ApiError.badRequest(e.message))            
        }
 

    }

    async getAll (req,res){
        let {userDatumIdUser, titleDatumIdTitle, limit, page} = req.query
        page = page||1
        limit = limit||9
        let offset = page*limit-limit
        let markerData;
        if (!userDatumIdUser && !titleDatumIdTitle) {
            markerData = await Marker.findAndCountAll({limit,offset})
        }
        if (userDatumIdUser && !titleDatumIdTitle) {
            markerData = await Marker.findAndCountAll({where:{userDatumIdUser},limit,offset})
        }
        if (!userDatumIdUser && titleDatumIdTitle) {
            markerData = await Marker.findAndCountAll({where:{titleDatumIdTitle},limit,offset})
        }
        if (userDatumIdUser && titleDatumIdTitle) {
            markerData = await Marker.findAndCountAll({where:{userDatumIdUser, titleDatumIdTitle},limit,offset})
        }
        return res.json(markerData)
    }

    async getOne (req,res){
        try{
            const{id_marker}= req.params
            const markerData =await Marker.findOne({
                where:{id_marker}
            },)
            return res.json(markerData) 
        }
        catch(e){
            next(ApiError.badRequest(e.message))
        }

    }
    async update(req,res,next){
        try {
            const {id_marker,userDatumIdUser,titleDatumIdTitle} = req.body
            if(!id_marker){
                return next(ApiError.badRequest('not marker'))
            }
            let updatePost =await Marker.update({userDatumIdUser,titleDatumIdTitle},{where:{id_marker}})
            updatePost = await Marker.findOne({where:{id_marker}},)
            return res.json(updatePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async deleteOne(req,res,next){
        try {
            const {id_marker} = req.params
            if(!id_marker){
                return next(ApiError.badRequest('not marker'))
            }
            let deletePost =await Marker.destroy({where:{id_marker}})
            return res.json(deletePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports=new MarkerController()