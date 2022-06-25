const User = require('../model/user.model')

const getEmail = (field)=>{
    return User.findOne(field)
}

const createEntries = (fields)=>{
    return User.create(fields)
}

module.exports = {getEmail,createEntries}