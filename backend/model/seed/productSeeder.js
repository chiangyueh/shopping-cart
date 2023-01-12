const mongoose = require('mongoose')
const productList = require('../product')
const defaultProductList = require('../../product.json').results;
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
    console.log('mongodb error!')
})

db.once('open', () => {
    console.log('mongodb connected!')
    defaultProductList.forEach(element => {
        productList.create(element)
    });
    console.log('done')
})