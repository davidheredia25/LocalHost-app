const pkg = require('mongoose');
const { Schema, model } = pkg;

const ticketSchema = new Schema({
    date: {
        type: Date,
        default: new Date
    },
    numOrden: {
        type: Number,
        required: true
    },
    precioTotal: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        default: "Pending"
    },
    direccion: {
        type: String,
        required: true
    },
    metodoPago: {
        type: String,
        required: true,
        default: 'mercadoPago'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        autopopulate: true
    },
    exis: {
        type: Boolean,
        default: true
    },
    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
            autopopulate: true
        },
        qty: {
            type: Number
        }
    }],
}, {
    versionKey: false,
    timestamps: false
});

ticketSchema.plugin(require('mongoose-autopopulate'));

module.exports = model('Ticket', ticketSchema);