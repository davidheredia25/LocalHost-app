 const pkg = require('mongoose');
 const { Schema, model } = pkg;

const paymentSchema = new Schema({
       status:{  
            type: String,
            enum: ['created', 'processing', 'cancelled', 'completed'],
            default: "created"
         },
         payment_id:{
            type: Number,
             default: 0
         },
         payment_status:{
             type: String,
             default: ""
         },
         merchant_order_id: {
            type: Number,
            default: 0
         }


 }, 
 {
    versionKey: false,
    timestamps: false
 });

 module.exports = model('Payment', paymentSchema);
