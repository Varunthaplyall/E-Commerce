const express = require("express");
const userModel = require("../models/user.model");
const { isLoggedIn } = require("../middlewares/authentication");
const { populate } = require("dotenv");
const router = express.Router()



router.get('/cart', isLoggedIn, async (req, res) => {
    const userId = req.user._id; 

    try {
        const user = await userModel.findById(userId).populate({
            path: "cart",
            populate: {
                path: "product",
                model: "Product" 
            }
        });

        if (!user) {
            req.flash("error", "User not found");
            return res.redirect('/login'); 
        } 

        user.cart = user.cart.filter(item => item.product !== null);

        await user.save();

        res.render('cart', { cart: user.cart }); 
    } catch (error) {
        console.error(error);
        req.flash("error", "An error occurred while fetching the cart");
        res.redirect("back");
    }
});


router.post("/cart/add", isLoggedIn , async(req,res) => {
    const { productId } = req.body;
    const userId = req.user._id;
                               
     try {
        const user = await userModel.findById(userId);
                                             
        if (!user) {
            req.flash("error", "User not found");
            return res.redirect("back");
        }

        const productIndex = user.cart.findIndex((product) => product.product == productId);
        
        if (productIndex == -1) {
            user.cart.push({ product: productId, quantity: 1 });
        } else {
            user.cart[productIndex].quantity++;
        }

        await user.save();

        req.flash("success", "Product added to the cart");
        return res.redirect("back");
    } catch (error) {
        console.error(error);
        req.flash("error", "An error occurred while adding the product to the cart");
        return res.redirect("back");
    }
});

router.delete("/cart/delete", isLoggedIn, async(req,res)=>{
    const userId = req.user._id;
    const {productId} = req.body;
    console.log({productId})
    const user = await userModel.findById(userId)

    const productIndex = user.cart.findIndex((product) => product.product.toString() === productId);
    console.log(productIndex)
    if (!user) {
        req.flash("error", "User not found");
        return res.redirect("back");
    }
    if (productIndex === -1) {
        req.flash("error", "Product not found in your cart");
        return res.redirect("back");
    } else {
        user.cart[productIndex].quantity--;

        if (user.cart[productIndex].quantity === 0) {
            user.cart.splice(productIndex, 1);
        }
    }
    await user.save();

    
    req.flash("success", "Item removed sucessfully")
    return res.redirect("back");


})

module.exports = router;
