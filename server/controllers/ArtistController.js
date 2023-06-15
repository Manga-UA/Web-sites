const uuid = require('uuid')
const path = require('path');
const {Artist} = require('../models/models');
const ApiError = require('../error/ApiError');
var fs = require("fs");

class ArtistController{

    async create (req,res,next){
        try {       
        const {name_artist,description_artist} = req.body
        const {image_artist} = req.files
        let fileName = uuid.v4()+".jpg"
        image_artist.mv(path.resolve(__dirname,'..','static',fileName))
        const dateRegist = Date.now()

        const artistData = await Artist.create({
            name_artist,
            description_artist,
            data_registration: dateRegist,
            image_artist: fileName
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
            const {id_artist,name_artist,description_artist} = req.body
            const {image_artist} = req.files
            let fileName = uuid.v4()+".jpg"
            image_artist.mv(path.resolve(__dirname,'..','static',fileName))
            if(!id_artist){
                return next(ApiError.badRequest('not artist'))
            }
            const artistData =await Artist.findOne({
                where:{id_artist}
            },)
            //this.deleteImage(artistData.fileName)

            let updatePost =await Artist.update({
                name_artist,
                description_artist,
                image_artistL:fileName
            },{where:{id_artist}})
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
    
    deleteImage(fileName){
        fs.unlink(path.resolve(__dirname,'..','static',fileName), function(err){
            if (err) {
                console.log(err);
            } else {
                console.log("Файл удалён");
            }
        });
    }
}

module.exports=new ArtistController()