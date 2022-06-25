const mongoose = require('mongoose')
const config = require('config')

const uri = config.get('database.uri') + '/' + config.get('database.name')
const options = {useNewUrlParser:true,useUnifiedTopology:true}

module.exports = mongoose.connect(uri,options).catch(error=>console.log(error))