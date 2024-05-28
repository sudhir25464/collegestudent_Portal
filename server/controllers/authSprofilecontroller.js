studentprofile = require("../models/studentProfile")

const upload = require('../middleware/fileStrorehandle')

const createprofile = async (req, res) => {
    console.log(req.body);

    try {
        const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

        // Assuming Updates is your Mongoose model for storing updates
        const data = new studentprofile({
            name:req.body.name,
            jobRole:req.body.jobRole,
            courseDetails:req.body.courseDetails,

            coursesession:req.body.coursesession,

            distric:req.body.distric,
            setLinkdin:req.body.setLinkdin,

            setEmail:req.body.setEmail,
            setWattsp: req.body.setWattsp,

            studentDesc:req.body.studentDesc,

            image:imagePath
        });

        await data.save();
        res.status(201).json({ success: true, message: 'Update saved successfully', data: data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Upload failed' });
    }
    console.log(req.body);
};

const getauthstudentprofile = async (req, res)=>{

    try {
        const data= await studentprofile.find({})

    // res.status(200).json({success:true, profiledata:profiledata})
    res.send({success: true, data :data})    
} catch (error) {

        console.error('Error fetching notic data:', error);
        // res.status(500).json({ success: false, error: 'Internal Server Error' });
        res.send({success:false, message:"Innternal server Error"})
    }

}

const deleteauthprofile = async (req, res) =>{

    
     try {
        const id = req.params.id;
        console.log(id);
        
        const data = await studentprofile.deleteOne({_id :id})
        res.send({success:true, message:'Profile deleted successfully'})

     } catch (error) {

        console.error(error)
        res.send({success: false, message:'Internal server Error'});
     }
}

module.exports = {
createprofile, 
getauthstudentprofile, 
deleteauthprofile,  
    
}