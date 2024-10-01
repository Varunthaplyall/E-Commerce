const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reviews'
        }
    ]
});

module.exports = mongoose.model('Product', productSchema);
