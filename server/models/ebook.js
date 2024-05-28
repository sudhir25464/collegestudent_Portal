const mongoose = require('mongoose')

const {Schema} = mongoose

const ebookSchema = new Schema({

    subjectName:{
        type:String,
        require:true,
    },
    topicName:{
        type:String,
        require:true,
    },
    courseDetails:{
        type:String,
    },
    pdfbook:{
        type:String,
        
    },
    
},
{
timestamps: true,
}

)

const uplaodpdfModel = mongoose.model('Ebook',ebookSchema)

module.exports = uplaodpdfModel;