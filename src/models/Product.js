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
        required: true,
        autopopulate: true
    },
    // category: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Category',
    //     required: true,
    //     autopopulate: true
    // }],
    // types: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Types',
    //     required: true,
    //     autopopulate: true
    // }],
    price: {
        type: Number,
        required: true
    },
    color: {        
        type: String,
        required: true
    },
    
    talle: [{
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
        ref: 'Review',
        autopopulate: true
    },
    stock: {
        type: Number,
        default: 1,
        required: true
    }
}, {
    versionKey: false,
    timestamps: false
});

productSchema.plugin(require('mongoose-autopopulate'));

module.exports = model('Product', productSchema);