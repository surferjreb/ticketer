const mongoose = require('mongoose');
const company = require('./company.js');

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
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: company,
    }
});

const customer = mongoose.model('customer', customerSchema);

module.exports = customer;