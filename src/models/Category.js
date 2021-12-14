const pkg = require('mongoose');
const { Schema, model } = pkg;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    exis: {
        type: Boolean,
        default: true
    },
    // types:[{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Types',
    //     required: true,
    //     autopopulate: true
    // }]
}, {
    versionKey: false,
    timestamps: false
});

categorySchema.plugin(require('mongoose-autopopulate'));

module.exports = model('Category', categorySchema);