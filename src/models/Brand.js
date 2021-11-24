const pkg = require('mongoose');
const { Schema, model } = pkg;

const brandSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: false
});

module.exports = model('Brand', brandSchema);