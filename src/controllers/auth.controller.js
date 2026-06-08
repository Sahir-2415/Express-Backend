const userModel=require('../models/user.model');
const jwt=require('jsonwebtoken');
async function registerUser(req,res){
    const {username,email,password}=req.body;
    
    const user=await userModel.create({
        username,email,password
    })
    //we know that when we save something in mongo db then and _id is given to it my mongo db and that id will be different for both the users  

    const token=jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.status(201).json({
        message:"User registered successfully",
        user,
        token
    })

}

module.exports={registerUser} // export in the form of object