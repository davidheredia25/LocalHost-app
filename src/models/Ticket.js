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
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        autopopulate: true
    },
    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
            autopopulate: true
        },
        qty: {
            type: Number,
            required: true,
            default: 1
        },
        price: {
            type: Number,
            required: true,
        }
    }],
}, {
    versionKey: false,
    timestamps: false
});

ticketSchema.plugin(require('mongoose-autopopulate'));

module.exports = model('Ticket', ticketSchema);