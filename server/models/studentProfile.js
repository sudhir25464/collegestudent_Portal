const mongoose = require("mongoose")

const {Schema}=mongoose;

const studentProfileSchema = new Schema({

    name:{
        type:String,
        require:true,
    },
    jobRole:{
        type:String,
    },
    courseDetails:{
        type:String,
        require:true,
    },
    coursesession:{
        type:String,
        require:true,
    },
    distric:{
        type:String,
        require:true,
    },
    setLinkdin:{
        type:String,
        require:true,
    },
    setEmail:{
        type:String,
        require:true,
    },
    setWattsp:{
        type:String,

    },
    studentDesc:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        
    },

},

{
    timestamps:true,
}
)

const studentProfileModel = mongoose.model("studentprofile",studentProfileSchema);

module.exports= studentProfileModel;