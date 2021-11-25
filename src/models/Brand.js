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
        required: true,
        autopopulate: true
    }],
    // types: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Types',
    //     required: true,
    //     autopopulate: true
    // }]
}, {
    versionKey: false,
    timestamps: false
});

brandSchema.plugin(require('mongoose-autopopulate'));

module.exports = model("Brand", brandSchema);