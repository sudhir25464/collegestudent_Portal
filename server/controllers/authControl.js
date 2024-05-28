 const User = require ('../models/user');
 //const {hashhPassword, comparePassword} = require('../helper/auth')
 const bcrypt = require("bcrypt");
 const jwt = require("jsonwebtoken");

const test = (req, res)=>{
    res.json('test is working')
}


const regsterUser = async (req,res)=>{

    try{
        const {   collegeId,
            fullName,
            fathersName,
            email,
            contact,
            gender,
            university,
            course,
            dob,
             password,
             confirmPassword,
             address,
            role,
        }=req.body;

        // check if name was entred
        if(!collegeId || !fullName || !fathersName){
            return res.json({
                error:"All fields are require"
            })
        }
        if(!collegeId){
            return res.json({
                error:'Id is Required'
            })
        }
         if(!fullName){
            return res.json({
                error:'name is require'
            })
         };

         if(!fathersName){
            return res.json({
                error:'father is required'
            })
         }
         if(!email){
            return res.json({
                error:'email is require'
            })
         }
         if(!contact){
            return res.json({
                error:'contact is required'
            })
         }

         if(!gender){
            return res.json({
                error:'Please select gender'
            })
         }
         if(!university){
            return res.json({
                error:'Please select Univercity'
            })
         }
         if(!course){

            return res.json({
                error:'Please select course'
            })
         }
         if(!dob){
            return res.json({
                error:'Empty date of Birth'
            })
         }
         

         // check password
         if(!password || password.length <6){
            return res.json({
                error:'password be required and should be 6 character'
            })
         }

         if(password != confirmPassword){
            return res.json({
                error:'Confirm password is invalid'
            })
         }

         if(!address || address.length <10){
            return res.json({
                error:'Addres is Required and Enter valid address'
            })
         }

         // check ID 
         const emlexist = await User.findOne({collegeId});
         if(emlexist){
            return res.json({
                error:'User already Exist Please enter valid Id'
            })
         }
         // check emial
         const exist = await User.findOne({email});
         if(exist){
            return res.json({
                error:'Email is taken already'
            })
         }
         // other require field like contact and password validation

         const contactexist = await User.findOne({contact});
         const dubpassword = await User.findOne({password})

         if(contactexist){

            return res.json({
                error:'User already exits Please enter valid number'
            })
         }
         if(contact.length >10 || contact.length<10){
            return res.json({
                error:'Invalid number Please Enter valid mob: number'
            })
         }

         if(dubpassword){
            
            return res.json({
                error:'This password is alreday created Create Strong password'
            })
         }
         // hash password
       

        let hashedPassword;
        try {

            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch (err) {
            return res.status(500).json({
                success: false,
                message: 'Eroor in hashing password',
            });

        }
       
         const user = await User.create({

            collegeId,
            fullName,
            fathersName,
            email,
            contact,
            gender,
            university,
            course,
            dob,
             password:hashedPassword,
            
             address,
             role
         })
        
         return res.json(user)

        
    }
    catch(error){

        console.log(error);
    }
};



//Login Api UserEndPoint   

const loginUser = async (req,res) =>{

    try {

        const {email,password} = req.body;
        // check if useris exist
        if(!email){
            return res.json({
                error:'Email is required'
            })
         };
         if(!password){
            return res.json({
                error:'password is Required'
            })
         }

     let user =  await User.findOne({email});
     if(!user){
        return res.json({
            error: 'No User Found'
        })
     }

     const isPasswordvalid = await bcrypt.compare(password, user.password);
  
     if(!isPasswordvalid){
        return res.json({error:' Invalid password'})
     }


     
    const token = jwt.sign(
        {
          userId: user._id,
          email: user.email,
          collegeId: user.collegeId,
          role: user.role,
          fullName: user.fullName,
          fathersName: user.fathersName,
          contact: user.contact,
          gender: user.gender,
          university: user.university,
          course: user.course,
          dob: user.dob,
          address: user.address,
          password:user.password,
     
        },
        process.env.JWT_SECRET,
        { expiresIn: '1hr' }
      );
  
      res.status(200).json({ token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }

    }
// changed

    //  const payload ={
    //     email:user.email,
    //     id:user._id,
    //     role:user.role,
    // }


    // // Verify passowrd and Generate a JWT token

    //  if( await bcrypt.compare(password,user.password)){

    //     //password match
    //     let token = jwt.sign(payload, 
    //         process.env.JWT_SECRET,{
    //             expiresIn:"2h",
                
    //         }
    //         );

    //         // create tOken 
    //          user = user.toObject();
    //         user.token = token;
    //         user.password = undefined;

    //         const options ={

    //             expires: new Date( Date.now()+3 * 24 *60*60*1000),
    //             httpOnly:true,
    //         }

    //         res.cookie("token", token , options).status(200).json({
    //             success:true,
    //             token,
    //             user,
    //             message:' user Logged in success',
    //         });

            
    // }
    // else{
    //     // password not match
    //     return res.status(403).json({
    //         success:false,
    //         message:"Password Incorrect",
    //     })
    // }

        



//getprofile

// const getprofile = (req,res)=>{

//     const{token} = req.cookie

//     if(token){
//         jwt.verify(token, process.env.JWT_SECRET, {} ,(err, user)=>{

//             if(err) throw err;
//             res.json(user)

//         })
//     }
//     else{
//         res.json(null)
//     }
//}

module.exports ={
    test,
    regsterUser,
    loginUser,
   // getprofile,
}