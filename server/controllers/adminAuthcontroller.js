
const Admin = require('../models/admin');

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const JWT_SECRET = 'admin5623526'

const adminSignup = async (req, res) => {


    try {
        const {
            name,
            email,
            contact,
            password,
            role,

        } = req.body;

        const checkemial = await Admin.findOne({ email });

        if (checkemial) {

            return res.json({
                error: 'Email are already Exist'
            })
        }
        // has admin password 
        let hashAdminpassword;
        try {

            hashAdminpassword = await bcrypt.hash(password, 10);
        }
        catch (error) {

            return res.status(500).json({
                success: false,
                message: 'Error in hashing passord'
            });

        }

        const imagePath = req.file ? `/uploads/${req.file.filename}` : null;


        const admin = await Admin.create({

            name,
            email,
            contact,
            password: hashAdminpassword,
            role,
            image: imagePath,
        })

        return res.json(admin)



    } catch (error) {

        console.log(error);
    }

};

//AdminLogin Api 


const adminLogin = async (req, res) => {

    try {

        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.json({
                error: 'All fields are required'
            })

        };



        const admin = await Admin.findOne({ email })
        if (!admin) {
            return res.json({
                error: 'Invalid user'
            })
        }
        //  const checkpassword = await Admin.findOne({password})

        const chekerole = await Admin.findOne({ role })




        if (!chekerole) {
            return res.json({

                error: 'Role is not matched please select valid role'
            })
        }

        const iSAdminpasswordValid = await bcrypt.compare(password, admin.password)

        if (!iSAdminpasswordValid) {

            return res.json({ error: 'Invalid Password ' })
        }

        // Generate admin token 
        // sudhiradmin89@gmail.com

        // const Admintoken = jwt.sign({ useId: admin._id }, JWT_SECRET, { expiresIn: '2hr' })

        // res.status(200).json({ Admintoken });

        const Admintoken = jwt.sign(
            {
              adminId: admin._id,
              email: admin.email,
              name:admin.name,
             contact:admin.contact,
              role:admin.role,
              image:admin.image,
              timestamps:admin.timestamps,

            
              // Add other user data as needed
            },
            process.env.JWT_SECRET,
            { expiresIn: '2hr' }
          );
      
          res.status(200).json({ Admintoken });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
    
        }

    // }
    // catch (error) {

    //     return res.json('Inter nal server Error')
    // }


const getAdminprofile = async (req, res) => {

    try {
        const data = await Admin.find({})

        res.send({ success: true, data: data })
    } catch (error) {

        console.error('Error fetching notic data:', error);
        res.send({ success: false, message: "Innternal server Error" })
    }
}

const deleteadminProfile = async (req, res) => {

    const id = req.params.id
    console.log(id)

    const data = await Admin.deleteOne({ _id: id })
    res.send({ success: true, message: "Record deleted succesfully", data: data })


};

const updateAdminProfile = async (req, res) => {

    const { name, email, contact, password, role, image } = req.body;
    try {
        // Assuming you have a MongoDB model named Admin
        const updatedAdmin = await Admin.findOneAndUpdate(
            { _id: req.params.id }, // Assuming the route parameter contains the admin ID
            { name, email, contact, password, role, image },
            { new: true } // To return the updated document
        );

        if (!updatedAdmin) {
            return res.status(404).json({ success: false, message: 'Admin not found' });
        }

        res.status(200).json({ success: true, message: 'Admin profile updated successfully', data: updatedAdmin });
    } catch (error) {
        console.error('Error updating admin profile:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};




module.exports = {
    adminSignup,
    adminLogin,
    getAdminprofile,
    deleteadminProfile,

    updateAdminProfile,

}