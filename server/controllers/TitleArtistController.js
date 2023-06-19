const uuid = require('uuid')
const path = require('path');
const {TitleArtist} = require('../models/models');
const ApiError = require('../error/ApiError');

class TitleArtistController{

    async create (req,res,next){
        try {       
        const {titleDatumIdTitle,artistDatumIdArtist} = req.body

        const data = await TitleArtist.create({
            titleDatumIdTitle,
            artistDatumIdArtist
        })
        return res.json(data)
            
        } catch (e) {
            next(ApiError.badRequest(e.message))            
        }
 

    }

    async getAll (req,res){
        let {titleDatumIdTitle,artistDatumIdArtist, limit, page} = req.query
        page = page||1
        limit = limit||9
        let offset = page*limit-limit
        let data;
        if (!titleDatumIdTitle && !artistDatumIdArtist) {
            data = await TitleArtist.findAndCountAll({limit,offset})
        }
        if (titleDatumIdTitle && !artistDatumIdArtist) {
            data = await TitleArtist.findAndCountAll({where:{titleDatumIdTitle},limit,offset})
        }
        if (!titleDatumIdTitle && artistDatumIdArtist) {
            data = await TitleArtist.findAndCountAll({where:{artistDatumIdArtist},limit,offset})
        }
        if (titleDatumIdTitle && artistDatumIdArtist) {
            data = await TitleArtist.findAndCountAll({where:{titleDatumIdTitle, artistDatumIdArtist},limit,offset})
        }
        return res.json(data)
    }

    async getOne (req,res){
        const{id_title_artist}= req.params
        const data =await TitleArtist.findOne({
            where:{id_title_artist}
        },)
        return res.json(data) 

    }
    async update(req,res,next){
        try {
            const {id_title_artist,titleDatumIdTitle,artistDatumIdArtist} = req.body
            if(!id_title_artist){
                return next(ApiError.badRequest('not record'))
            }
            let updatePost =await TitleArtist.update({titleDatumIdTitle,artistDatumIdArtist},{where:{id_title_artist}})
            updatePost = await TitleArtist.findOne({where:{id_title_artist}},)
            return res.json(updatePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async deleteOne(req,res,next){
        try {
            const {id_title_artist} = req.params
            if(!id_title_artist){
                return next(ApiError.badRequest('not record'))
            }
            let deletePost =await TitleArtist.destroy({where:{id_title_artist}})
            return res.json(deletePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports=new TitleArtistController()