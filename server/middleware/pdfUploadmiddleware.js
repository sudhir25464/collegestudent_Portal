// const multer = require('multer');
// const path = require('path');
// const uuid = require('uuid');

// const destinationPath = path.join(__dirname, '..', 'uploadspdf');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, destinationPath);
//     },
//     filename: (req, file, cb) => {
//         const filename = `pdf_${uuid.v4()}${path.extname(file.originalname)}`;
//         cb(null, filename);
//     }
// });

// const fileFilter = (req, file, cb) => {
//     const allowedFileTypes = ['pdf'];

//     const extname = path.extname(file.originalname).toLowerCase();
//     if (allowedFileTypes.includes(extname.slice(1))) {
//         cb(null, true);
//     } else {
//         cb(new Error('Only PDF files are allowed!'));
//     }
// };



// const uploadpdf = multer({ storage, fileFilter });

// module.exports = uploadpdf;

const multer = require('multer');
const path = require('path');
const uuid = require('uuid');

const destinationPath = path.join(__dirname, '..', 'uploadspdf');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
        // const extname = path.extname(file.originalname);
        // const filename = `pdf_${Date.now()}${path.extname(file.originalname)}`;
const filename = `pdf_${uuid.v4()}${path.extname(file.originalname)}`;
        // const filename = `file_${Date.now()}${extname}`;
        cb(null, filename);
    }

// filename: (req, file, callback) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     callback(null, `pdf_${uniqueSuffix}${path.extname(file.originalname)}`);
//   },

});

const fileFilters = (req, file, cb) => {
    const allowedFileTypes = ['pdf'];

    const extname = path.extname(file.originalname).toLowerCase();
    if (allowedFileTypes.includes(extname.slice(1))) {
        cb(null, true);
    } else {
        cb(new Error('Only PDF files are allowed!'), false);
    }
};

const uploadpdf = multer({ storage, fileFilters });

module.exports = uploadpdf;
