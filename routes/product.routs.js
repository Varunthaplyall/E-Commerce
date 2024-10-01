const express = require('express');
const productModel = require("../models/Product.model");
const reviewModel = require("../models/Review.models");
const { productValidation } = require('../../middlewares/validator');
const router = express.Router();  // Create a new router instance

// Define routes
router.get('/data', async (req, res) => {
    const userData = await productModel.find()
    res.json(userData);
});

router.get("/", async(req,res)=>{
    const userData = await productModel.find();
    res.render("home", {
        title : 'Home || Clothing Stop',
        data : userData
    })
});

router.get('/products', async(req,res)=>{
    const userData = await productModel.find()
    res.render("allProducts",{
        title : "Products-List",
        data : userData
    })
});

router.get('/products/new', (req,res)=>{
    res.render("new-product");
});

router.post('/products', productValidation , async(req,res)=>{
    const body = req.body;
    await productModel.create(body);
    res.redirect('/products');
});

router.get('/products/:id', async(req,res)=>{
    const {id} = req.params;
    const product = await productModel.findById(id).populate('reviews');
    res.render("product", {product})
});

router.get('/products/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const product = await productModel.findById(id);
    res.render("editing", {product})
});

router.put("/products/:id", productValidation, async(req,res)=>{
    const {id} = req.params;
    const body = req.body;
    
    const product = await productModel.findById(id);

    if(body.title) product.title = body.title;
    if (body.price) product.price = body.price;
    if (body.image) product.image = body.image;
    if (body.description) product.description = body.description;

    await product.save();
    res.redirect("/products")

});


router.delete("/products/:id", async (req,res)=>{
    const {id} = req.params;
    const product = await productModel.findById(id);

    for (let reviewId of product.reviews){
        await reviewModel.findByIdAndDelete(reviewId);
    }
    await productModel.findByIdAndDelete(id);

    res.redirect("/products")
});







// Export the router
module.exports = router;

