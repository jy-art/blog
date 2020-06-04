module.exports = app=> {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    const Article = mongoose.model('Artcle')
    const Category = mongoose.model('Category')
    router.get('/categories',async(req,res) => {
        const model = await Category.find().populate('parent')
        res.send(model)
    })
    router.get('/artcles',async(req,res) => {
        const model = await Article.find().populate('categories').sort({updatedAt:-1})
        res.send(model)
    })
    router.get('/artcles/:id',async(req,res) => {
        const model = await Article.findById(req.params.id).populate('categories')
        res.send(model)
    })
    router.get('/artclesas/:id',async(req,res) => {
        const model = await Article.find({categories:req.params.id}).populate('categories').sort({updatedAt:-1})
        res.send(model)
    })
    router.get('/categor',async(req,res) => {
        const aets = await Category.aggregate([
            {
                $lookup:{
                    from:'artcles',
                    localField:'_id',
                    foreignField:'categories',
                    as:'artleList'
                }
            }
        ])
        
        
        res.send(aets)
    })
    router.get('/searchs/:keyword',async(req,res) => {
        const keyword = req.params.keyword
        const reg = new RegExp(keyword, 'i')
        const model = await Article.find(
            {
                $or : [
                    {title : {$regex : reg}},
                    {body : {$regex : reg}}
                ]
            }
        ).populate('categories')
        res.send(model)
    })
    

    app.use('/web/api',router)
}