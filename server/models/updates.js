const mongoose = require('mongoose')

const {Schema} = mongoose

const updatesSchema = new Schema({

    heading:{
        type:String,
        
    },
    image:{
        type:String,
    },
    updatesdesc:{
        type:String,
        require:true,
    }

},
{
 timestamps:true   

})

const updatesModel = mongoose.model('Updates',updatesSchema)
module.exports = updatesModel;