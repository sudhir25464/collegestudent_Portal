const mongoose = require('mongoose')
const {Schema} = mongoose

const noticSchema = new Schema({

    heading:String,
    noticmessage:{
        type:String,
        require:true,
    },
   
 
 }, {
        timestamps:true
    
// name:String,
// tags:String,
// email:String,
// imageUrl:String,

})

const noticModel = mongoose.model('Notic', noticSchema)
module.exports = noticModel;