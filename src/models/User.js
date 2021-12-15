const pkg = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema, model } = pkg;

const userSchema = new Schema({
    fristName: {
        type: String,
        // required: true
    },
    lastName: {
        type: String,
        //required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "UNVERIFIED"
    },
    password: {
        type: String,
        required: true
    },
    document: {
        type: String
    },
    telephone: {
        type: Number
    },
    image: {
        type: String,
        default: ""
    },
    direction: {
        type: String
    },
    floor: {
        type: Number
    },
    department: {
        type: String
    },
    location: {
        type: String
    },
    city: {
        type: String
    },
    postalCode: {
        type: Number
    },
    dateOfBirth: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    exis: {
        type: Boolean,
        default: true
    },
    isDelivery: {
        type: Boolean,
        default: false
    },
    ticket: [{
        type: Schema.Types.ObjectId,
        ref: 'Ticket',
        autopopulate: true
    }],
    cart: [{
        cart: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            // autopopulate: true
        },
        qtyCart: {
            type: Number,
            default: 1
        },
        talle: {
            type: String,
            default: ''
        }
    }]
}, {
    versionKey: false,
    timestamps: false
});


userSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
})

userSchema.methods.isValidContraseña = async function (password) {
    const user = this;
    const compara = await bcrypt.compare(password, user.password);
    return compara;
}

userSchema.plugin(require('mongoose-autopopulate'));

module.exports = model('User', userSchema);