const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser : true, useUnifiedTopology: true})

const db = mongoose.connection

db.on('error',()=>{
    console.log('MongoDB err')
})

db.once('open',()=>{
    console.log('數據庫連線成功')
})