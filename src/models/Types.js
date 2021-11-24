const pkg = require('mongoose');
const { Schema, model } = pkg;

const typeSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: false
});


module.exports = model('Types', typeSchema);