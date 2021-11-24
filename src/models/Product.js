const pkg = require('mongoose');
const { Schema, model } = pkg;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    category: [{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }],
    sexo: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    color: {        
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    size: [{
        type: String,
        required: true
    }],
    numReviews: {
        uno: {
            type: Number,
            default: 1
        },
        dos: {
            type: Number,
            default: 1
        },
        tres: {
            type: Number,
            default: 1
        },
        cuatro: {
            type: Number,
            default: 1
        },
        cinco: {
            type: Number,
            default: 1
        },
    },
    reviews: {
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }
}, {
    versionKey: false,
    timestamps: false
});

module.exports = model('Product', productSchema);