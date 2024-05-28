// middlewares/uploadMiddleware.js

const multer = require('multer');
const path = require('path');

// '..', 

const destinationPath = path.join(__dirname, '..', 'uploads');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
        const filename = `image_${Date.now()}${path.extname(file.originalname)}`;
        cb(null, filename);
    }
});

const upload = multer({ storage });

module.exports = upload;
