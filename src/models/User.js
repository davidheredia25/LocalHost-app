const pkg = require('mongoose');
const { Schema, model } = pkg;

const userSchema = new Schema({
    fristName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
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
    }
}, {
    versionKey: false,
    timestamps: false
});

//DAVID Q ONDA CON ESTO PA? No sabemos que pija hace por eso lo comentamos. 
/* UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.contraseña, 10);
    this.contraseña = hash;
    next();
})

UserSchema.methods.isValidContraseña = async function (contraseña) {
    const user = this;
    const compara = await bcrypt.compare(contraseña, user.contraseña);
    return compara;
} */ /* tkm marquito */

module.exports = model('User', userSchema);