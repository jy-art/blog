const mongoose = require('mongoose')

const schem = new mongoose.Schema({
    username:{type:String},
    password:{
        type:String,
        select:false,
        set(val){
            return require('bcrypt').hashSync(val,10)  //10->加密指数
        }
    }
})

module.exports = mongoose.model('AdminUser',schem)