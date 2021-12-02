 const pkg = require('mongoose');
 const { Schema, model } = pkg;

const orderSchema = new Schema({
       status:{  
            type: Enum('created', 'processing', 'cancelled', 'completed'),
         },
         payment_id:{
            type: Number,
             defaultValue: 0
         },
         payment_status:{
             type: String,
             defaultValue: ""
         },
         merchant_order_id: {
            type: Bigint,
             defaultValue: 0
         }

 });