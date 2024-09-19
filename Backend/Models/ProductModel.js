const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    image : {type:String},
    name : {type:String,required:true},
    des : {type:String,required:true},
    price : {type:String,required:true},
},{timestamps:true})

const ProductModel = mongoose.model('product',productSchema)

module.exports =ProductModel