const  mongoose =require('mongoose')
const UserSchema =new mongoose.Schema({
    name:{
        type:string,
        required:true
    },
    email:{
        type:string,
        required:true

    },
    image:{
        type:string,
        required:true

    },
    password:{
        type:string,
        required:true

    },
    is_online:{
        type:string,
       default:'0'

    }
},
{timestamp:true})


module.exports =mongoose.Model('User',UserSchema)