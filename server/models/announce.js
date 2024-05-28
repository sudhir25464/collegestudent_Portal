const mongoose = require('mongoose')

const {Schema} = mongoose

const announceSchema = new Schema({

    message:String,
    link:String,
   
},{
    timestamps:true
    
})

const announceModel = mongoose.model('Announce',announceSchema)

module.exports = announceModel;

