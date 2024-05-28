const mongoose = require('mongoose')

const {Schema} = mongoose

const adminSchema = new Schema({
    name:{
        type:String,

    },
    email:{
        type:String,
        unique:true,
    },
    contact:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        unique:true,
    },
    role:{
        type:String,
    },
    image:{
        type:String,
    }
},
{
    timestamps:true,
})
const adminModel = mongoose.model('Admin',adminSchema)
module.exports = adminModel;