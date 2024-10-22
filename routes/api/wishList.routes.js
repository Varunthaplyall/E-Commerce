const express = require('express');
const userModel = require('../../models/user.model');
const { isLoggedIn } = require('../../middlewares/authentication');
const router = express.Router();


router.post('/wishList/:productId', isLoggedIn,async (req, res) => {
    
    try {

        const userId = req.user._id;
        const { productId } = req.params;


        const user = await userModel.findById(userId);
        console.log(userId)            // userId is not getting null or undefined 
        const productIndex = user.wishList.findIndex(p => p == productId);
        // console.log(productIndex)
        // console.log(typeof(productId))

        let message;
        if (productIndex == -1) {
            user.wishList.push(productId);
            message = "Item added to wishlist";
        } else {
            user.wishList.splice(productIndex, 1);
            message = "Item removed from your wishlist";
        }
        // console.log({message})
        
        await user.save();
        return res.status(200).json({
            success : true,
            message,
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "An error occurred while updating the wishlist" });
    }
});



module.exports = router; 



