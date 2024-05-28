const mongoose = require('mongoose');

const {Schema} = mongoose;

const authslider = new Schema({


    image:{
        type:String,
    }
},
{
    timestamps:true,
})

const authsliderModel = mongoose.model('Authslider', authslider);
module.exports = authsliderModel;