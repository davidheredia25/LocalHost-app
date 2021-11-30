const pkg = require('mongoose');
const bcrypt = require("bcryptjs");
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
    password: {
        type: String,
        required: true
    },
    document: {
        type: String
    },
    image: {
        type: String
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
        type: Schema.Types.ObjectId,
        ref: 'Product',
        autopopulate: true
    }]
}, {
    versionKey: false,
    timestamps: false
});

//DAVID Q ONDA CON ESTO PA? No sabemos que pija hace por eso lo comentamos. 
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