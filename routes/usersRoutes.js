const express=require ('express')
const user_routes=express()

const bodyParse=require('body-parser')

user_routes.use(bodyParse.json())
user_routes.use(bodyParse.urlencoded({extended:true}))

user_routes.set('view engine',"ejs")
user_routes.set('views',"../views/views.js")

user_routes.use(express.static('public'))
const path=require('path')
const multer=require('multer')