const userModel=require('../models/user.model');
const jwt=require('jsonwebtoken');
async function registerUser(req,res){
    const {username,email,password}=req.body;
    
    const ifUserAlreadyExisits=await userModel.findOne({ // this part should be written here only and not anywhere else , like agar niche likhoge to it will not work
        email
    })

    if(ifUserAlreadyExisits){
        return res.status(409).json({
            message:"User already exists"
        })
    }

    const user=await userModel.create({
        username,email,password
    })                                                                  
    //we know that when we save something in mongo db then and _id is given to it my mongo db and that id will be different for both the users  

    

    const token=jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie("token",token);

    res.status(201).json({
        message:"User registered successfully",
        user,
    })

}

module.exports={registerUser} // export in the form of object