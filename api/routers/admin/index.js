module.exports = app => {
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const auth = require('../../middleware/auth')
    const router = express.Router({
        mergeParams:true   //合并url参数
      })
    router.post('/',async(req,res) => {
      console.log(req.body);
      
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    router.get('/',async(req,res) => {
        const quryOptions = {}
        if(req.Model.modelName === 'Category'){
          quryOptions.populate ='parent'
        }
        if(req.Model.modelName === 'Artcle'){
          quryOptions.populate = 'categories'
        }
        const model = await  req.Model.find().setOptions(quryOptions).sort({updatedAt:-1})
        res.send(model)
    })
    router.get('/:id',async(req,res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })
    router.delete('/:id',async(req,res) => {
        const model = await req.Model.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success:true
        })
    })
    router.put('/:id',async(req,res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })
   
    app.use('/admin/api/res/:resource',auth(),async(req,res,next) => {
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)
        next()
    },router)

    const path = require('path')
    //处理上传数据
    const multer = require('multer')
    const upload = multer({dest:path.join(__dirname + '/../../uploads')})
    app.post('/admin/api/upload',auth(),upload.single('file'),async(req,res) => {
      const file = req.file
      file.url = `http://localhost:3000/uploads/${file.filename}`
      
      res.send(file)
    })
    const AdminUser = require('../../models/AdminUser')
    app.post('/admin/api/login',async(req,res) => {
        const {username,password} = req.body
        //1.根据用户名找用户
         
          const user = await AdminUser.findOne({username}).select('+password')
  
          assert(user,422,'用户不存在')
        //2.校验密码
          const isValid = require('bcrypt').compareSync(password,user.password)
          assert(isValid,422,'密码错误')
          
        //3.返回token
          const name = user.username
          const token = jwt.sign({id:user._id},app.get('secre'))
          res.send({token,name})
      })

       //错误处理
    app.use(async(err,req,res,next) => {
        res.status(err.statusCode || 500).send({
          message:err.message
        })
      })
}

