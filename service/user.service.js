const User = require('../model/user.model')
const bcrypt = require('bcrypt')
const config = require('config')

const getEmail = (field)=>{
    return User.findOne(field)
}

const createEntries = (fields)=>{
    return User.create(fields)
}
const hashPass = async(field)=>{
    return  await bcrypt.hash(field,config.get('hash.salt'))
}
module.exports = {getEmail,createEntries,hashPass}