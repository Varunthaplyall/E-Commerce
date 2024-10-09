const isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash("error", "please login first")
        res.redirect("/login")
    }
    next();
}

const isSeller = (req,res,next)=>{
    if(req.user?.role !== 'seller'){ 
        req.flash("error", "Not Authorized")
        res.redirect("back")
        return
    }
    next();
}   


module.exports = {
    isLoggedIn,
    isSeller
}