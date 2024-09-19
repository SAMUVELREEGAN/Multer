const express = require('express')

const app = express()

const mongoose = require('mongoose')

const cors = require('cors')

app.use(cors())

app.use(express.json())

app.use(express.urlencoded())

mongoose.connect("mongodb://localhost:27017/Multer").then(()=>{console.log("DB Connected")}).catch(()=>{console.log("Connection Faild")})

app.use(require('./Routers/ProductRouter'))

app.use("/files",express.static(__dirname + "/public/upload/"))




app.listen(8000,()=>{
    console.log("port : 8000")
})