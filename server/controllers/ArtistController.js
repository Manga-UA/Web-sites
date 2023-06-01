const uuid = require('uuid')
const path = require('path');
const {Artist} = require('../models/models');
const ApiError = require('../error/ApiError');

class ArtistController{

    async create (req,res,next){
        try {       
        const {name_artist} = req.body

        const artistData = await Artist.create({
            name_artist
        })
        return res.json(artistData)
            
        } catch (e) {
            next(ApiError.badRequest(e.message))            
        }
 

    }

    async getAll (req,res){
        let {limit, page} = req.query
        page = page||1
        limit = limit||9
        let offset = page*limit-limit
        let artistData;
        artistData = await Artist.findAndCountAll({limit,offset})
        return res.json(artistData)
    }

    async getOne (req,res){
        const{id_artist}= req.params
        const artistData =await Artist.findOne({
            where:{id_artist}
        },)
        return res.json(artistData) 

    }
    async update(req,res,next){
        try {
            const {id_artist,name_artist} = req.body
            if(!id_artist){
                return next(ApiError.badRequest('not artist'))
            }
            let updatePost =await Artist.update({name_artist},{where:{id_artist}})
            updatePost = await Artist.findOne({where:{id_artist}},)
            return res.json(updatePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async deleteOne(req,res,next){
        try {
            const {id_artist} = req.params
            if(!id_artist){
                return next(ApiError.badRequest('not artist'))
            }
            let deletePost =await Artist.destroy({where:{id_artist}})
            return res.json(deletePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports=new ArtistController()