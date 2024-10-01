const joi = require("joi");

const productSchema = joi.object({
    title: joi.string().alphanum().required(),
    price : joi.number().required().min(0),
    description : joi.string(),
    image : joi.string().default("https://www.auslogics.com/en/articles/wp-content/uploads/2023/11/FIXED-How-to-Fix-The-Default-Gateway-Is-Not-Available-Error-in-Windows--scaled.jpg")
})

const reviewSchema = joi.object({
    rating : joi.number().required(),
    comment : joi.string(),
})

module.exports={
    productSchema,
    reviewSchema
}