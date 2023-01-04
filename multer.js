// multer 
const express = require('express')
const multer = require('multer')
const app = express()

const uploads = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb)=>{
            cb(null, './public/uploads')
        },
        filename: (req, file, cb)=>{
            cb(null, file.fieldname + Date.now() + ".jpg")
        }
    })
}).single("file")

app.post("/uploads", uploads,(req, res)=>{
    res.send("File uploaded")
})

app.listen(5000)              