module.exports = app=> {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    const Article = mongoose.model('Artcle')
    const Category = mongoose.model('Category')
    router.get('/categories',async(req,res) => {
        const model = await Category.find().populate('parent')
        res.send(model)
    })
    router.get('/aeticle',async(req,res) => {
        const model = await Article.find().populate('categories').sort({updatedAt:-1})
        res.send(model)
    })
    router.get('/aeticle/:id',async(req,res) => {
        const model = await Article.findById(req.params.id).populate('categories')
        res.send(model)
    })
    router.get('/aeticles/:id',async(req,res) => {
        const model = await Article.find({categories:req.params.id}).populate('categories').sort({updatedAt:-1})
        res.send(model)
    })
    app.use('/web/api',router)
}