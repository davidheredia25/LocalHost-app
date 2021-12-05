 const pkg = require('mongoose');
 const { Schema, model } = pkg;

const orderSchema = new Schema({
       status:{  
            type: String,
            enum: ['created', 'processing', 'cancelled', 'completed'],
            default: "created"
         },
         payment_id:{
            type: String,
             default: ""
         },
         payment_status:{
             type: String,
             default: ""
         },
         merchant_order_id: {
            type: String,
            default: ""
         }


 }, 
 {
    versionKey: false,
    timestamps: false
 });

 module.exports = model('Order', orderSchema);
