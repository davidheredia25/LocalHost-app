const pkg = require('mongoose');
const { Schema, model } = pkg;

const typesSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: false
});


module.exports = model('Types', typesSchema);