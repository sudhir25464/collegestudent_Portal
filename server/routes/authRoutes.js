const express = require('express')
const upload = require('../middleware/fileStrorehandle')
const uploadpdfbook = require('../middleware/pdfUploadmiddleware')

const router = express.Router();

const cors = require('cors')

const {test, regsterUser, loginUser } = require('../controllers/authControl')

const {adminSignup, adminLogin, getAdminprofile, deleteadminProfile, updateAdminProfile}= require('../controllers/adminAuthcontroller')

const {getannounce, createannounce, deleteannounce, getnotic, createnotic, deletenotic, uploadimg, contactUs} =require('../controllers/post')

const {getUpdates, createUpdates, deleteUpdates} = require('../controllers/updatesController');
const { CountStudent, CountPPUstudent, CountAKUstudent, studentProfileList, CountAdmin, deleteStudentProfileList, showprofile, uploadAuthslider, getAuthslider, deleteAuthslider, uploadHomeslider, gethomeSlider, deletehomeslider, Countbooks, CountstudentProfile, CountGlarryimg } = require('../controllers/AdmindashbordController');
const { pdfUpload, getAllpdf, getpdfurl, newpdflist, newpdfdownlaod, getAllbookDetails, downloadBook, deletebook } = require('../controllers/uploadCoursematerial');
const uploadpdf = require('../middleware/pdfUploadmiddleware');
const { createprofile, getauthstudentprofile, deleteauthprofile } = require('../controllers/authSprofilecontroller');
const { uploadglarry, getglarry, deleteglarry } = require('../controllers/glarryController');
// middleware
router.use(

    cors({
        credentials:true,
        origin:'http://localhost:3000'
    })
)

router.get('/',test)

router.post('/register',regsterUser)
router.post('/logiin',loginUser)

router.post('/adminsignup', upload.single('image'),adminSignup)
router.post('/adminlogin',adminLogin)
router.get('/getadminprofile', getAdminprofile)
router.delete('/deleteAdminprofile/:id', deleteadminProfile)
// router.put('/updateAdminProfile/:id', updateAdminProfile);
router.put('/updateadminprofile/:id', updateAdminProfile)

// craete admin api aroutes

router.get('/getannouncement',getannounce)
router.post('/newannounce',createannounce)
router.delete('/deleteannounced/:id',deleteannounce)

router.get('/getnoticDetails',getnotic)
router.post('/createNotic',createnotic)
router.delete('/deletenotic/:id',deletenotic)

router.get('/getupadtesData',getUpdates)
router.post('/createUpdates',  upload.single('image'), createUpdates)
router.delete('/deleteUpdate/:id', deleteUpdates)

router.get('/countstudent',CountStudent)
router.get('/countPPUstudent',CountPPUstudent)
router.get('/countAKUstudent',CountAKUstudent)
router.get('/getstudentProfileList',studentProfileList)
router.get('/getadminCount',CountAdmin)
router.delete('/deletestudentProfileList/:id', deleteStudentProfileList)
router.get('/showstudentprofile/:id', showprofile)
router.post('/uploadauthslider', upload.single('image'), uploadAuthslider)
router.get('/getuthslider', getAuthslider);
router.delete('/deleteauthslider/:id', deleteAuthslider);
router.post('/uploadhomeslider', upload.single('image'),uploadHomeslider);
router.get('/gethomeslider', gethomeSlider);
router.delete('/deletehomeslider/:id', deletehomeslider);

router.post('/uploadcousermeterial',uploadpdfbook.single('pdfbook') ,pdfUpload)
// router.post('/uploadcousermeterial', uploadpdfbook.single('file') ,pdfUpload)
router.get('/getcoursemeterial',getAllpdf)

// router.get('/getcoursemeterial/pdfbook:',getAllpdf)
router.get('/api/books/:id/download', getpdfurl)
// making new url

router.get('/list-pdf-liles', newpdflist)
router.get('/download-pdf/:filename', newpdfdownlaod)
router.get('/downloadbook/:pdfId', downloadBook)
// test api route

router.get('/getpdgbookdetails', getAllbookDetails)

router.delete('/deletebook/:id', deletebook)


// auth studentprofile
router.post('/authstudent', upload.single('image') ,createprofile)
router.get('/getauthstudentprofile', getauthstudentprofile)
router.delete('/deletestudentprofile/:id', deleteauthprofile)

router.post('/uploadglarry', upload.single('image'), uploadglarry)
router.get('/getglarrydata',getglarry)
router.delete('/deleteglarry/:id', deleteglarry);

router.get('/countbooks', Countbooks);
router.get('/countStudnetprofile', CountstudentProfile);
router.get('/countglarry', CountGlarryimg);
router.post('/contactus', contactUs);

module.exports =router