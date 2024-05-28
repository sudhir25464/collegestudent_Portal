
const Announce = require("../models/announce")

const Contact = require ("../models/contactus")
const Notic = require("../models/notic")
//fetch notic data from database
const getnotic = async (req,res)=>{

    const data= await Notic.find({}).sort({ createdAt: 'desc' })
    res.send({success: true, data :data})
   
}
// create notic api 


// const multer = require('multer');

// // Multer configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Specify the folder where you want to store the uploaded files
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname); // Set a unique filename for each uploaded file
//   },
// });

// const upload = multer({ storage: storage });

// const createnotic = async (req, res) => {
//   try {
//     // If there is a file in the request, handle it with Multer
//     const uploadMiddleware = upload.single('image'); // 'image' is the field name in the form

//     uploadMiddleware(req, res, async function (err) {
//       if (err instanceof multer.MulterError) {
//         // Multer error
//         return res.status(500).json({ success: false, message: 'Multer error', error: err });
//       } else if (err) {
//         // Other errors
//         return res.status(500).json({ success: false, message: 'Internal server error', error: err });
//       }

//       // File information is available in req.file
//       const { originalname, filename, path } = req.file;

//       // Other form data is available in req.body
//       const data = new Notic({
//         ...req.body,
//         imageName: originalname,
//         imagePath: path,
//         // Add other fields as needed
//       });

//       await data.save();

//       res.status(201).json({ success: true, message: 'Data saved successfully', data: data });
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// };


// sjaddha

const createnotic = async (req, res) => {
    console.log(req.body);

    try 
    {
       

        const data = new Notic(req.body);
        await data.save();
        res.status(201).json({ success: true, message: 'Data saved successfully', data: data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// delete Notic api
const deletenotic = async (req,res)=>{
  
    const id = req.params.id
    console.log(id)

    const data = await Notic.deleteOne({_id: id})
    res.send ({success :true , message :"Data delete succesfully", data : data})
        

};

// fetch all anounce data from announce datamodel

const getannounce = async (req,res)=>{

    const data= await Announce.find({}).sort({ createdAt: 'desc' })
    res.send({success: true, data :data})
   
}

// create Announce api 
const createannounce = async (req, res) => {
    console.log(req.body);

    try {
        const data = new Announce(req.body);
        await data.save();
        res.status(201).json({ success: true, message: 'Data saved successfully', data: data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// delete announce api
const deleteannounce = async (req,res)=>{
  
    const id = req.params.id
    console.log(id)

    const data = await Announce.deleteOne({_id: id})
    res.send ({success :true , message :"Data delete succesfully", data : data})


};

// const multer = require('multer');
// const cloudinary = require('cloudinary').v2;
// const newNotic = require("../models/uploadimg")
// // const router = express.Router();

// // Multer configuration
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// cloudinary.config({
//   cloud_name: 'dmcytmsit',
//   api_key: '326165648552885',
//   api_secret: '3-fNQdA8H3jfqoFdTI61pVJZQOI'
// });

// sjaddha

const contactUs  = async (req, res)=>{
    console.log(req.body);

    try 
    {
       

        const data = new Contact(req.body);
        await data.save();
        res.status(201).json({ success: true, message: 'Message send successfully', data: data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

module.exports = {
   getannounce,
   createannounce,
   deleteannounce,

   getnotic,
   createnotic,
   deletenotic,
   contactUs,

 
}