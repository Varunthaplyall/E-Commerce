const joi = require("joi");

const productSchema = joi.object({
    title: joi.string().required(),
    price : joi.number().required().min(0),
    description : joi.string(),
    image : joi.string().default("https://www.auslogics.com/en/articles/wp-content/uploads/2023/11/FIXED-How-to-Fix-The-Default-Gateway-Is-Not-Available-Error-in-Windows--scaled.jpg")
})

const reviewSchema = joi.object({
    rating : joi.number().required(),
    comment : joi.string(),
})

const userSchema = joi.object({
    username : joi.string().alphanum().required(),  
    email : joi.string().email().required(),

})

module.exports={
    productSchema,
    reviewSchema,
    userSchema
}