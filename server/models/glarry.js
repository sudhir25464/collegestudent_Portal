const mongoose = require('mongoose');
const {Schema} = mongoose

const glarrySchema = new    Schema ({
    
    image:{
        type:String,
        require:true,
    },
    aboutpost:{
        type:String,
        
    }

},

{
    timestamps:true,
}
)

const glarryModel = mongoose.model('Glarry', glarrySchema);

module.exports= glarryModel;

