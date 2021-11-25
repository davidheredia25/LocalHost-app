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
        required: true,
        autopopulate: true
    }
}, {
    versionKey: false,
    timestamps: false
});

reviewSchema.plugin(require('mongoose-autopopulate'));

module.exports = model('Review', reviewSchema);