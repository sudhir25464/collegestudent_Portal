const Student = require('../models/user');
const User = require('../models/user');

const upload = require('../middleware/fileStrorehandle')

const Authslider = require('../models/authUserslider');
const Homeslider = require('../models/homeSlider');
const Admin = require('../models/admin');
const Books = require('../models/ebook');
const StudentProfile= require('../models/studentProfile');
const Gallaryimg = require('../models/glarry');


// Define an API endpoint to count all students
const CountStudent = async (req, res) => {

  // Count all students in the database
  try {
    const count = await Student.countDocuments();
    res.status(200).json({
      status: "success",
      results: count,


    })
    // res.send({success:true, count :count});

  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }

};

const CountPPUstudent = async (req, res) => {
  try {
    const ppuCount = await Student.countDocuments({ university: 'PPU' });

    res.status(200).json({
      status: "success",
      results: ppuCount,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error,
    });
  }
};


const CountAKUstudent = async (req, res) => {
  try {
    const akuCount = await Student.countDocuments({ university: 'AKU' });

    res.status(200).json({

      status: "success",
      results: akuCount,

    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};


// admin count

const CountAdmin = async (req, res) => {

  // Count all students in the database
  try {
    const countAdmin = await Admin.countDocuments();
    res.status(200).json({
      status: "success",
      results: countAdmin,


    })
    // res.send({success:true, count :count});

  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }

};


// const Notic = require("../models/notic")
// fetch student Details list
const studentProfileList = async (req, res) => {

  const data = await User.find({}).sort({ createdAt: 'desc' })
  res.send({ success: true, data: data })

}

// Delete Api student profile list
const deleteStudentProfileList = async (req, res) => {

  const id = req.params.id
  console.log(id)

  const data = await User.deleteOne({ _id: id })
  res.send({ success: true, message: "Record deleted succesfully", data: data })


};

// show profile data

const showprofile = async (req, res) => {

  try {

    const id = req.params.id
    const data = await User.findOne({ _id: id })
    res.send({ success: true, data: data })

  } catch (error) {
    console.error(error)
    res.send({ success: false, message: "Datta Fetching Interval server Error" })
  }

}


const uploadAuthslider = async (req, res) => {

  console.log(req.body);
  try {
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const data = new Authslider({

    image:imagePath,

    })
    console.log(imagePath);
    await data.save();
    res.status(201).json({ success: true, message: 'Update saved successfully', data: data });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Upload failed' });

  }
}


const getAuthslider = async(req, res)=>{
  try {
    const data= await Authslider.find({})

res.send({success: true, data :data})    
} catch (error) {

    console.error('Error fetching  data:', error);
    res.send({success:false, message:"Innternal server Error"})
}
}



const deleteAuthslider = async (req, res) => {

  const id = req.params.id
  console.log(id)

  const data = await Authslider.deleteOne({ _id: id })
  res.send({ success: true, message: " Slider deleted succesfully", data: data })


};

const uploadHomeslider = async (req, res) => {

  console.log(req.body);
  try {
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const data = new Homeslider({

    image:imagePath,

    })
    console.log(imagePath);
    await data.save();
    res.status(201).json({ success: true, message: 'Update saved successfully', data: data });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Upload failed' });

  }
}

const gethomeSlider = async(req,res)=>{

  try {
    
    const data= await  Homeslider.find({})
    res.send({success: true, data:data})
  } catch (error) {
    
    console.error('Error fetching data:', error);
    res.send({success:false, message:"Innternal server Error"})
  }
}

const deletehomeslider= async(req, res) =>{

  const id = req.params.id
  console.log(id)

  const data = await Homeslider.deleteOne({ _id: id })
  res.send({ success: true, message: " Slider deleted succesfully", data: data })


}

const Countbooks = async (req, res) => {

  // Count all students in the database
  try {
    const count = await Books.countDocuments();
    res.status(200).json({
      status: "success",
      results: count,


    })
    // res.send({success:true, count :count});

  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }

};

const CountstudentProfile = async (req, res) => {

  // Count all students in the database
  try {
    const count = await StudentProfile.countDocuments();
    res.status(200).json({
      status: "success",
      results: count,


    })
    // res.send({success:true, count :count});

  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }

};
const CountGlarryimg = async (req, res) => {

  // Count all students in the database
  try {
    const count = await Gallaryimg.countDocuments();
    res.status(200).json({
      status: "success",
      results: count,


    })
    // res.send({success:true, count :count});

  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }

};

module.exports = {
  CountStudent,
  CountPPUstudent,
  CountAKUstudent,
  CountAdmin,
  studentProfileList,
  deleteStudentProfileList,
  showprofile,

  uploadAuthslider,

  getAuthslider,
  deleteAuthslider,

  uploadHomeslider,
  gethomeSlider,
  deletehomeslider,
  Countbooks,
  CountstudentProfile,
  CountGlarryimg,
  
 



}
