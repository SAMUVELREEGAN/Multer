const ProductModel = require('../Models/ProductModel')

const express = require('express')

const router = express.Router()

const path = require('path')

const multer = require('multer')

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'./public/upload/')
    },
    filename : function(req,file,cb){
        cb(null,Date.now()+path.extname(file.originalname))
    }
})
const uploader = multer({storage:storage})

exports.insert=[uploader.single('image'),(req,res)=>{
    const product = new ProductModel({
        name : req.body.name,
        des : req.body.des,
        price : req.body.price,
        image : req.file ? req.file.filename : null
    })
    product.save().then((all)=>{res.send(all)}).catch((err)=>{res.send(err)})
}]

exports.list=[(req,res)=>{
    ProductModel.find().then((saved)=>{res.send(saved)}).catch((err)=>{res.send(err)})
}]