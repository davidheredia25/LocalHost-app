const pkg = require('mongoose');
const { Schema, model } = pkg;

const reviewSchema = new Schema({
    rating: {
        type: Number,
        required: true
    },
    comentario: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    }
}, {
    versionKey: false,
    timestamps: false
});

module.exports = model('Review', reviewSchema);