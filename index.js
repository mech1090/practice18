const express = require('express')
const cors = require('cors')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express())
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('TEST OKK')
})

app.get('*',(req,res)=>{
    res.send('BAD_REQUEST')
})

app.listen(config.get('port'),()=>{
    console.log(`Server running on port ${config.get('port')}`)
})