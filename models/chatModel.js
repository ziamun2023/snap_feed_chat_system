const  mongoose =require('mongoose')
const chatSchema =new mongoose.Schema({
    sender_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    receiver_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    message:{
        type:string,
        required:true
    }


},
{timestamp:true})


module.exports =mongoose.Model('chat',chatSchema)