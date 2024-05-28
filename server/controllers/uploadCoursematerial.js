const UploadPdf = require('../models/ebook')
const path = require('path');
// const uploadpdf = require('../middleware/pdfUploadmiddleware')
const fs = require('fs');
const pdf = require('pdf-parse');

//  Final upload api
const pdfUpload = async (req, res) => {
    console.log(req.body);
    
    try {
        const pdfPath = req.file ? `/uploadspdf/${req.file.filename}` : null;
        if (!pdfPath) {
            console.error('File path is undefined');
            return res.status(400).json({ error: 'File path is undefined' });
          }
          console.log(pdfPath)
        console.log(req.body);
        // Assuming PdfDocuments is your Mongoose model for storing PDF documents
        const pdfData = new UploadPdf({
            subjectName:req.body.subjectName,
            topicName:req.body.topicName,
            courseDetails:req.body.courseDetails,
            pdfbook:pdfPath
           
        });

      
    
        await pdfData.save();
        res.status(201).json({ success: true, message: 'PDF uploaded successfully', data: pdfData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Upload failed' });
    }
};


// Final get API
const getAllbookDetails = async (req, res) => {
  try {
      const data = await UploadPdf.find();
      res.send({success: true, data :data})    
      // res.status(200).json({ success: true, data: data });
  } catch (error) {
      console.error(error);
      res.send({success:false, message:"Innternal server Error"})

      // res.status(500).json({ success: false, message: 'Error fetching PDF details' });
  }
};

// Final delete api
const deletebook = async (req, res)=>{

  try {
      const id = req.params.id
      console.log(id)
      const data = await UploadPdf.deleteOne({_id: id})
      res.send ({success :true, message:'Book succesfull deleted', data : data })
      
  } catch (error) {
      
      console.error(error);
      res.status(500).json ({ success: false, message: 'Internal server error'})
  }
 

};

// Below dummy api
const getAllpdf =  async (req, res)=>{

    
    try {

        const data = await UploadPdf.find({}).sort({creatAt:'desc'});
        res.json({ success: true, data: data });
               
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error fetching PDF data' });
    }

}

const getpdfurl =async (req, res) => {
    // app.get('/api/books/:id/download', async (req, res) => {
        const bookId = req.params.id;
        const book = await UploadPdf.findById(bookId);
      
        if (!book) {
          return res.status(404).json({ message: 'Book not found' });
        }
      
        // Set response headers to handle PDF download
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=${book.bookName}.pdf`);
      
        res.send(book.bookpdf);
      };


      const newpdflist = async (req, res) => {

        try {
            const pdfFiles = await UploadPdf.find().distinct('pdfbook'); 
            res.json(pdfFiles);
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      };

      const newpdfdownlaod = async (req, res) => {
        try {
          const pdfFilePath = path.join(__dirname, '..', 'uploadspdf', req.params.pdfbook);
          // const pdfFilePath = await UploadPdf.find().distinct('pdfbook'); 
          // const pdfFilePath=  UploadPdf.req.params.pdfbook

          res.sendFile(pdfFilePath);
        ;
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      };
      
// ('/list-pdf-files'
// app.get('/download-pdf/:filename',

// second for padf
const downloadBook = async (req, res) => {
  const pdfId = req.params.pdfId; // Assuming you pass the PDF ID as a parameter
  try {
      const pdfDetails = await UploadPdf.findById(pdfId);
      
      if (!pdfDetails) {
          return res.status(404).json({ success: false, message: 'PDF not found' });
      }

      // Implement logic to send the PDF file for download
      res.set('Content-Type', 'application/pdf');
      const filePath = path.resolve(__dirname, '../uploadspdf', pdfDetails.pdfbook);

      res.download(filePath, `${pdfDetails.subjectName}_${pdfDetails.topicName}.pdf`);
  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error downloading PDF' });
  }
};


module.exports={
    pdfUpload,
    getAllpdf,
    getpdfurl,

    newpdflist,
    newpdfdownlaod,
    downloadBook,


    getAllbookDetails,
    deletebook,
    

}