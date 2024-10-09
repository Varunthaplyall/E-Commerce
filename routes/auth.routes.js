const express = require('express');
const router = express.Router()
const passport = require('passport');
const userModel = require('../models/user.model');

router.get("/login", (req,res)=>{
    res.render("auth/login")
});

router.get('/register', async (req,res)=>{
    res.render("auth/register")
})


router.post("/register" ,async (req,res)=>{
    const {username, email, password, role} = req.body;
    const existingUser = await userModel.findOne({username, email})
    if(existingUser){
        req.flash("error", "User already exist please login");
        return res.redirect("/register")
    }

    const user = new userModel({
        username,
        email,
        role
    })
    await userModel.register(user, password)
    req.flash("success", "You Have Successfully Registered Yourself, Please Login")
    res.redirect("/login")
});

router.post('/login', passport.authenticate("local",{  
    successRedirect : "/products",
    failureRedirect : "/login",
    failureFlash : true,
    successFlash: true
    

}))

router.get("/logout", (req,res)=>{
    req.logout(function (err){
        if(err){
            return next(err)
        }
    })

    req.flash("success", "SuccessFully Logged Out");
    res.redirect('/login')
})




module.exports = router;