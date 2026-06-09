const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const userModel=require('../models/user.model');
router.post('/create',async(req,res)=>{
    
    const token = req.cookies.token;
    if(!token){ // if no token means not registered so not able to create post
        res.status(401).json({
            message:"Unauthorized" 
        })
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET); // verifies if token is correct or not bcz we dont want any post creation on wrong token

        const user=await userModel.findOne({
            _id:decoded.id
        })

        console.log(user); // will give the user that is creating the post
    }catch(err){
        return res.status(401).json({
            message:"Token is invalid"
        })
    }
    

    res.send("Post created successfully");
})

module.exports=router;