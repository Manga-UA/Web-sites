const {Rating} = require('../models/models')
const ApiError = require('../error/ApiError')

class RatingController{
    async create (req,res){
        try {
            const {views,rating,titleDatumIdTitle,userDatumIdUser} = req.body
            let viewsCreate=views||false
            let ratingCreate=rating||false
            const postRating = await Rating.create({views:viewsCreate,rating:ratingCreate,titleDatumIdTitle,userDatumIdUser})
            return res.json(postRating)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll (req,res){
        const postRating = await Rating.findAll()
        return res.json(postRating)
    }

    async getOne (req,res){
        const{id_rating}= req.params
        const ratingData =await Rating.findOne({
            where:{id_rating}
        },)
        return res.json(ratingData) 

    }

    async update(req,res,next){
        try {
            const {id_rating,views,rating,titleDatumIdTitle,userDatumIdUser} = req.body
            if(!id_rating){
                return next(ApiError.badRequest('not rating'))
            }
            if(!titleDatumIdTitle){
                return next(ApiError.badRequest('not title'))
            }
            if(!userDatumIdUser){
                return next(ApiError.badRequest('not user'))
            }
            let viewsCreate = views||false
            let ratingCreate = rating||false
            let updateType =await Type_title.update({views:viewsCreate,rating:ratingCreate},{where:{id_rating}})
            updateType = await Type_title.findOne({where:{id_rating}},)
            return res.json(updateType);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteOne(req,res,next){
        try {
            const {id_rating} = req.params
            if(!id_rating){
                return next(ApiError.badRequest('not type'))
            }
            let deleteRating =await Type_title.destroy({where:{id_rating}})
            return res.json(deleteRating);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports=new RatingController()