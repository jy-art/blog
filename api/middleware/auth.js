module.exports = option => {
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const AdminUser = require('../models/AdminUser')
    return async(req,res,next) => {
      
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token,401,'请先登录')
        const {id} = jwt.verify(token,req.app.get('secre'))
        assert(id,401,'请先登录')
        req.use = await AdminUser.findById(id)
        assert(req.use,401,'请先登录')
        await next()
      }
}





