const mongoose = require('mongoose');

const { Schema } = mongoose;


const companySchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    companyUrl: {
        type: String,
    }
});

const company = mongoose.model('company', companySchema);

module.exports = company;