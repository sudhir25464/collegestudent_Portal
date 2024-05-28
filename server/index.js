const express = require('express');
const dotenv = require('dotenv').config()
const app = express();
const path = require('path');
const cors = require('cors')


const multer = require('multer');
const cloudinary = require('cloudinary').v2;

const {mongoose} = require('mongoose')
mongoose.connect(process.env.MONGO_URL)

.then(()=> console.log('Db connectd'))
.catch((err)=> console.log("Db noT Connted", err))





// Replace these with your actual Cloudinary credentials
const CLOUDINARY_API_KEY = '326165648552885';
const CLOUDINARY_API_SECRET = '3-fNQdA8H3jfqoFdTI61pVJZQOI';
const CLOUDINARY_CLOUD_NAME = 'dmcytmsit';

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

//moddleware
app.use(express.json())

// app.use(express.urlencoded({ extended: true }));
app.use('//uploads', express.static('uploads'))
app.use('/uploads', express.static('uploads'))


app.use('/uploadspdf',express.static('uploadspdf'))
// app.use('/pdfs', express.static(path.join(__dirname, '../uploadspdf')));
// app.use('/uploadspdf', express.static(path.join(__dirname, 'uploadspdf')));

app.use(express.urlencoded({ extended: true }));

app.use('/',require('./routes/authRoutes'))

const port = 8000;
app.listen(port, ()=>{
   console.log(`Server is Running Port ${port}`)
})