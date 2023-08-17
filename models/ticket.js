const mongoose = require('mongoose');
const { Schema } = mongoose;


const ticketSchema = new Schema({
    date: String,
    time: String,
    title: String,
    description: String,
    companies: [{
        type: Schema.Types.ObjectId,
        ref: company
    }],
    customers: [{
        type: Schema.Types.ObjectId,
        ref: customer
    }],
    supportUser: {
        type: Schema.Types.ObjectId,
        ref: supportUser
    },
    ticketStatus: {
        type: String,
        lowercase: true,
        enum: ['new', 'open', 'onhold', 'completed']
    }
});

module.exports = mongoose.model('ticket', ticketSchema);