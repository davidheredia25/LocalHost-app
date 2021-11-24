const pkg = require('mongoose');
const { Schema, model } = pkg;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    types:[{
        type: Schema.Types.ObjectId,
        ref: 'Types',
        required: true
    }]
}, {
    versionKey: false,
    timestamps: false
});


module.exports = model('Category', categorySchema);