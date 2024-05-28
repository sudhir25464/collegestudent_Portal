const Glarry = require('../models/glarry');

const uploadglarry = (req,res) =>{
 
    console.log(req.body)

    try {
        const imagePath = req.file ? `/uploads/${req.file.filename}` : null;
        const data = new Glarry({
            image: imagePath,
            aboutpost:req.body.aboutpost,

        });
        data.save();
        res.status(201).json({success:true, message:'glarry updated successfully', data : data});

    } catch (error) {
        console.error(error);
        res.status(500).json({ success:false , message:' Internal server Error'});
        
    }
}

const getglarry = async (req, res) =>{
    try {
        const data = await Glarry.find({});
        res.send ({ success:true, data:data });
    } catch (error) {
        
        res.send({success :false , message:'Fetching data Error'})
        console.error(error);
        
    }


}

const deleteglarry = async (req, res) =>{

    const id= req.params.id;
    console.log(id)

   try {
    const data = await Glarry.deleteOne({_id: id});
    res.send({success:true, message:" glarry deleted successfully"})

    
   } catch (error) {
    
    console.error(error);
    res.send({success:false, message:"Internal server Error"});

   }


}

module.exports={
    uploadglarry,
    getglarry,
    deleteglarry,
}