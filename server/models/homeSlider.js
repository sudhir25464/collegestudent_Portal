const mongoose = require('mongoose');

const {Schema} = mongoose;

const homeSlider = new Schema({


    image:{
        type:String,
    }
},
{
    timestamps:true,
})

const homesliderModel = mongoose.model('Homeslider', homeSlider);
module.exports =homesliderModel;