const mongoose = require('mongoose');
const { Schema } = mongoose;

ticketActionSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    time: String,
    description: String,
});

const ticketAction = mongoose.model('ticketAction', ticketActionSchema);

module.exports = ticketAction;