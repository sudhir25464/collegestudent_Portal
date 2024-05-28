const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const newNotic = require("../models/uploadimg")
const router = express.Router();

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

cloudinary.config({
  cloud_name: 'dmcytmsit',
  api_key: '326165648552885',
  api_secret: '3-fNQdA8H3jfqoFdTI61pVJZQOI'
});

router.post('/newcreatenotic', upload.single('image'), async (req, res) => {
  console.log(req.body);

  try {
    const { title, description } = req.body;
    const image = req.file;

    if (!image) {
      return res.status(400).json({ success: false, message: 'Image file is required' });
    }

    // Upload image to Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.upload(image.buffer.toString('base64'));

    // Create a new Notic instance with the Cloudinary URL
    const data = new newNotic({
      title,
      description,
      imageUrl: cloudinaryResponse.secure_url
    });

    // Save the data to your database
    await data.save();

    res.status(201).json({ success: true, message: 'Data saved successfully', data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
