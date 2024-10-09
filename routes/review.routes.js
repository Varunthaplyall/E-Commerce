const express = require('express');
const reviewModel = require('../models/Review.models');
const productModel = require('../models/Product.model');
const { reviewValidation } = require('../middlewares/validator');
const router = express.Router()


router.post("/products/:productId/review", reviewValidation, async (req,res)=>{
    const {productId} = req.params;
    const {rating, comment} = req.body;
    console.log({productId});


    const review = await reviewModel.create({rating, comment})

    await productModel.updateOne(        
        {_id : productId},                 
        {$push : { reviews: review._id}} 
    );                               
    req.flash("success", "Thanks for giving your feedback!")    
    res.redirect(`/products/${productId}`);
})

router.delete("/products/:productId/review/:reviewId", async (req,res)=>{
    const {productId} = req.params;
    const {reviewId} = req.params;
    const review = await reviewModel.findByIdAndDelete(reviewId);   


    await productModel.findByIdAndUpdate(
        {_id :productId},
        {$pull: {reviews : reviewId}}
    );

req.flash("success", "Your review has been deleted")
    res.redirect(`/products/${productId}`);

});






// router.get()
module.exports = router;