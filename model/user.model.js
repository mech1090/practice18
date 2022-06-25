const { string } = require('joi')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    collection:'Practice18 User'
})

const User = mongoose.model('User',userSchema)

module.exports = User