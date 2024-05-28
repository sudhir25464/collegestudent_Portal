

// auth , is Student 


const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req,res, next) =>{

    try{

        // extract JWT token 

        // pending : ith ways to tech token
        const token = req.body.token;

        if(!token){
            return res.status(401).json({
                success:false,
                message:'Token Missing ',
            });
        }

        // veryfy the token 

        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);

            // why this 
            req.user = decode;

        }catch(error){
            return res.status(401).json({
                success:false,
                message:'Token is invalid',
            });
        }
        next();

    }catch(error){
         
        return res.status(401).json({
            success:false,
            message:'Some thing went worong, while veryfing token ',
        });

    }
}

exports.isStudent = (req, res, next) =>{

    try{

        if(req.user.role !== "student"){
            return res.status(401).json({
                success:false,
                message:'This is a protected route for student ',
            });
        }
        next();

    }catch{

        return res.status(500).json({
            success:false,
            message:'user Role is not matched ',
        })
    }
}

// exports.isAdmin = (req, res , next) =>{


//     try{

//         if(req.user.role !== "Admin"){
//             return res.status(401).json({
//                 success:false,
//                 message:'This is a protected route for Admin ',
//             });
//         }
//         next();

//     }catch{

//         return res.status(500).json({
//             success:false,
//             message:'user Role is not matched ',
//         })
//     }
// }

// what is cooke -parser