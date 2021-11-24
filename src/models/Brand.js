const pkg = require('mongoose');
const { Schema, model } = pkg;

const brandSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }]
}, {
    versionKey: false,
    timestamps: false
});

module.exports = model('Brand', brandSchema);