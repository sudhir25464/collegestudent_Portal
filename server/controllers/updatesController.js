const Updates = require("../models/updates")

const upload = require('../middleware/fileStrorehandle')

// get all Updates information from db through this  api
const getUpdates = async (req,res)=>{
    
    const data =await Updates.find({}).sort({ createdAt: 'desc' })
    res.send({success:true, data :data})

}

const createUpdates = async (req, res) => {
    console.log(req.body);

    try {
        const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

        // Assuming Updates is your Mongoose model for storing updates
        const data = new Updates({
            heading: req.body.heading,
            updatesdesc: req.body.updatesdesc,
            image: imagePath
        });

        await data.save();
        res.status(201).json({ success: true, message: 'Update saved successfully', data: data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Upload failed' });
    }
    console.log(req.body);
};

// asdjsf

// const createUpdates = async(req, res) =>{

//     console.log(req.body);
    
//     try{
//         const data = new Updates(
//             req.body,
           
//         );
//         await data.save();
//         res.status(201).json({ success :true, message: 'Updata saved successfully' , data: data});
//     } catch(error){

//         console.error(error);
//         res.status(500).json({ success: false, message:'Upload fail '})
//     }
// };

const deleteUpdates = async (req, res)=>{

    try {
        const id = req.params.id
        console.log(id)
        const data = await Updates.deleteOne({_id: id})
        res.send ({success :true, message:'Record succesfull deleted', data : data })
        
    } catch (error) {
        
        console.error(error);
        res.status(500).json ({ success: false, message: 'Internal server error'})
    }
   


};
// add edit api 

module.exports = {
    getUpdates,
    createUpdates,
    deleteUpdates,
}