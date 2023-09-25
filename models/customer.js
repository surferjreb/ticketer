const mongoose = require('mongoose');

const { Schema } = mongoose;


const customerSchema = new Schema({
    firstName: {
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
    }
});

const customer = mongoose.model('customer', customerSchema);

module.exports = customer;