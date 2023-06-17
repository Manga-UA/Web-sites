const uuid = require('uuid')
const path = require('path');
const {TitleGenre} = require('../models/models');
const ApiError = require('../error/ApiError');

class TitleGenreController{

    async create (req,res,next){
        try {       
        const {titleDatumIdTitle,genreTitleIdGenre} = req.body

        const data = await TitleGenre.create({
            titleDatumIdTitle,
            genreTitleIdGenre
        })
        return res.json(data)
            
        } catch (e) {
            next(ApiError.badRequest(e.message))            
        }
 

    }

    async getAll (req,res){
        let {titleDatumIdTitle,genreTitleIdGenre, limit, page} = req.query
        page = page||1
        limit = limit||9
        let offset = page*limit-limit
        let data;
        if (!titleDatumIdTitle && !genreTitleIdGenre) {
            data = await TitleGenre.findAndCountAll({limit,offset})
        }
        if (titleDatumIdTitle && !genreTitleIdGenre) {
            data = await TitleGenre.findAndCountAll({where:{titleDatumIdTitle},limit,offset})
        }
        if (!titleDatumIdTitle && genreTitleIdGenre) {
            data = await TitleGenre.findAndCountAll({where:{genreTitleIdGenre},limit,offset})
        }
        if (titleDatumIdTitle && genreTitleIdGenre) {
            data = await TitleGenre.findAndCountAll({where:{titleDatumIdTitle, genreTitleIdGenre},limit,offset})
        }
        return res.json(data)
    }

    async getOne (req,res){
        const{id_title_genre}= req.params
        const data =await TitleGenre.findOne({
            where:{id_title_genre}
        },)
        return res.json(data) 

    }
    async update(req,res,next){
        try {
            const {id_title_genre,titleDatumIdTitle,genreTitleIdGenre} = req.body
            if(!id_title_genre){
                return next(ApiError.badRequest('not record'))
            }
            let updatePost =await TitleGenre.update({titleDatumIdTitle,genreTitleIdGenre},{where:{id_title_genre}})
            updatePost = await TitleGenre.findOne({where:{id_title_genre}},)
            return res.json(updatePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async deleteOne(req,res,next){
        try {
            const {id_title_genre} = req.params
            if(!id_title_genre){
                return next(ApiError.badRequest('not record'))
            }
            let deletePost =await TitleGenre.destroy({where:{id_title_genre}})
            return res.json(deletePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports=new TitleGenreController()