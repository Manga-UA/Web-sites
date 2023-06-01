const uuid = require('uuid')
const path = require('path');
const {Genre} = require('../models/models');
const ApiError = require('../error/ApiError');

class GenreController{

    async create (req,res,next){
        try {       
        const {name_genre} = req.body

        const genreData = await Genre.create({
            name_genre
        })
        return res.json(genreData)
            
        } catch (e) {
            next(ApiError.badRequest(e.message))            
        }
 

    }

    async getAll (req,res){
        let {limit, page} = req.query
        page = page||1
        limit = limit||9
        let offset = page*limit-limit
        let genreData;
        genreData = await Genre.findAndCountAll({limit,offset})
        return res.json(genreData)
    }

    async getOne (req,res){
        const {id_genre}= req.params
        const genreData =await Genre.findOne({
            where:{id_genre}
        },)
        return res.json(genreData) 

    }
    async update(req,res,next){
        try {
            const {id_genre,name_genre} = req.body
            if(!id_genre){
                return next(ApiError.badRequest('not genre'))
            }
            let updatePost =await Genre.update({name_genre},{where:{id_genre}})
            updatePost = await Genre.findOne({where:{id_genre}},)
            return res.json(updatePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async deleteOne(req,res,next){
        try {
            const {id_genre} = req.params
            if(!id_genre){
                return next(ApiError.badRequest('not genre'))
            }
            let deletePost =await Genre.destroy({where:{id_genre}})
            return res.json(deletePost);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports=new GenreController()