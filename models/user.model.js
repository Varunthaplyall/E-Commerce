const { required, ref } = require('joi');
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
                type : mongoose.Types.ObjectId,
                ref : "Product"

            },
            quantity : {
                type : Number,
                min : 1,
                default : 1
            }
        }
    ]
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", userSchema);