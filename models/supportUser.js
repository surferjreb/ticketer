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
    },
    tickets: {
        type: Number,
        default: 0
    }
});

const supportUser = mongoose.model('supportUser', supportUsersSchema);

module.exports = supportUser;