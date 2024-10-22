const flash = require("connect-flash/lib/flash");
const {productSchema, reviewSchema, userSchema} = require("../validation/product");


const productValidation = (req,res,next)=>{
    const body = req.body;
    const {error, value} = productSchema.validate(body);

    if(error){
        console.log(`Error occured while creating a product : ${error}`);
    }else{
        next();
    }
};

const reviewValidation = (req,res,next)=>{
    const body = req.body;
    const {error, value} = reviewSchema.validate(body);

    if(error){
        req.flash("error", error.details[0].message)
        console.log(`Error occured while giving reviews ${error}`);
        res.redirect("back")
        return
    }else{
        next();
    }
};


module.exports = {
    productValidation,
    reviewValidation
};