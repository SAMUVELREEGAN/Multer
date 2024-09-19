const express = require('express')

const ProductController = require('../Controllers/ProductController')

const router = express.Router()

router.post('/product/insert',ProductController.insert)

router.get('/product/list',ProductController.list)

module.exports =router