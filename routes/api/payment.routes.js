const express = require("express");
const router = express.Router();
const Razorpay = require('razorpay');
const orderModel = require("../../models/order.model");
const { isLoggedIn } = require("../../middlewares/authentication");
const userModel = require("../../models/user.model");
const {key_id, key_secret} = process.env;

router.post("/products/:productId/order", isLoggedIn,async (req,res)=>{
    const {productId} = req.params;
    const userId = req.user._id;
    const {amount} = req.body;

    try {

        const instance = new Razorpay({
            key_id: key_id,
            key_secret: key_secret,
          });


        const options = {
            amount: parseFloat(amount) * 100,  
            currency: "INR"
          };

        const order = await instance.orders.create(options);

        const finalOrder = await orderModel.create({
            orderId : order.id,
            userId,
            productId,
            amount,
        });

        res.status(201).json({
            success : true,
            order : finalOrder
        })


    } catch (error) {
            console.log(error)
    }
})



router.post("/verify-payment", async(req,res)=>{
    try {

        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
        req.body;
        
        const { validatePaymentVerification } =  require("../../node_modules/razorpay/dist/utils/razorpay-utils"); 

        const isValid = validatePaymentVerification(
            { order_id: razorpay_order_id, payment_id: razorpay_payment_id },
            razorpay_signature,
            key_secret
          )

          if(isValid){
            await orderModel.updateOne(
                {orderId : razorpay_order_id},
                {payment : true}
            )
          }
          res.redirect("back")

          const order = await orderModel.findOne({orderId : razorpay_order_id});
          const userId = req.user._id;
          const user = await userModel.findOne(userId );

          const productIndex = user.cart.findIndex(
            (item) => item.product.toString() === order.productId.toString()
          );

          user.cart.splice(productIndex, 1);

          await user.save()


        

        
    } catch (error) {
        console.log(error);
        res.send("Something Went Wrong")
    }
})


router.post("/cart/:productId/order", async(req,res)=>{
    const {productId} = req.params;
    const userId = req.user._id;
    const {amount} = req.body;

    try {

        const instance = new Razorpay({
            key_id: key_id,
            key_secret: key_secret,
          });


        const options = {
            amount: parseFloat(amount) * 100,  
            currency: "INR"
          };

        const order = await instance.orders.create(options);

        const finalOrder = await orderModel.create({
            orderId : order.id,
            userId,
            productId,
            amount,
        });

        res.status(201).json({
            success : true,
            order : finalOrder
        })


    } catch (error) {
            console.log(error)
    }
})


module.exports= router;