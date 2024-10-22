const { required, ref, types } = require('joi');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique: true
    },
    role:{
        type : String,
        required : true,
        enum: ['seller', 'buyer']
    },
    cart : [
        {
            product : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Product"

            },
            quantity : {
                type : Number,
                min : 1,
                default : 1
            }
        }
    ],
    wishList: [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref  : 'product'
        }
    ]
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", userSchema);