require('dotenv').config()

const { default: mongoose } = require('mongoose')
var mongooes=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/snapfeed-chat')

const app=require('express')()
const http=require('http').Server(app)
const userRoutes=require('./routes/usersRoutes')
app.use('/',userRoutes)
http.listen(3000,function(){
    console.log('serrver is running')
})
