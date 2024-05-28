const mongoose = require('mongoose')

const {Schema} = mongoose

const userSchema = new Schema({

    collegeId:{
        type:String,
        unique:true,
    },
    fullName:{
        type:String,
    },
    fathersName:{
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
    gender:{
        type:String
    },
    university:{
        type:String,
    },
    course:{
        type:String,
    },
    dob:{
        type:String
    },
    password:{
        type:String,
        unique:true,
    },
    
    address:{
        type:String
    },
    role:{
        type:String,
        enum:["student, admin"]
    }
},
{
    timestamps:true,
}
)

const userModel = mongoose.model('User',userSchema)

module.exports = userModel;