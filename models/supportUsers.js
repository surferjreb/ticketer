const mongoose = require('mongoose');
const { Schema } = mongoose;


const supportUsersSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        requred: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('supportUsers', supportUsersSchema);
