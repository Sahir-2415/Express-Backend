//waise we create api's in app.js but in case of higher production or ig authentication we create api's in a seperate file
const express=require('express');
const authController=require('../controllers/auth.controller');
const router=express.Router();

// router.post('/register',(req,res)=>{

//     // usually we write logic here but in authentication we write logic in the controllers folder seperate file

// })

// agar register api access karni hai to we have to write /api/auth/register 
router.post('/register',authController.registerUser)

module.exports=router;