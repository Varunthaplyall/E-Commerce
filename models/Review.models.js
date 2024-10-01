const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    rating: {
        type : Number,
        min : 0,
        max : 5,
        required : true
    },
    comment: {
        type : String
    },
    createdAt: { 
        type: Date, default: Date.now 
    }
})

module.exports = mongoose.model("Reviews", reviewSchema);