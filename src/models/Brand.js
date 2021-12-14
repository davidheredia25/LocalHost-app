const pkg = require('mongoose');
const { Schema, model } = pkg;

const brandSchema = new Schema({
    name: {  // nike
        type: String,
        required: true
    },
    categories: [{
        name: [{
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
            autopopulate: true
        }],
        types: [{
            type: Schema.Types.ObjectId,
            ref: 'Types',
            required: true,
            autopopulate: true
        }]
    }],
    image: {
        type: String,
        // required: true
    },
    exis: {
        type: Boolean,
        default: true
    },
}, {
    versionKey: false,
    timestamps: false
});

brandSchema.plugin(require('mongoose-autopopulate'));

module.exports = model("Brand", brandSchema);