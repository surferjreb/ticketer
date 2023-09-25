const mongoose = require('mongoose');
const customer = require('./customer');
const { Schema } = mongoose;


const companySchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    companyUrl: {
        type: String,
    },
    customers: [{
        type: Schema.Types.ObjectId,
        ref: customer
    }]
})

const company = mongoose.model('company', companySchema);

module.exports = company;