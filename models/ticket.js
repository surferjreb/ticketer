const mongoose = require('mongoose');
const company = require('./company');
const customer = require('./customer');
const supportUser = require('./supportUser');
const ticketAction = require('./ticketAction');
const { Schema } = mongoose;


const ticketSchema = new Schema({
    date: String,
    time: String,
    ticketNumber: Number,
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    companies: [{
        type: Schema.Types.ObjectId,
        ref: company
    }],
    customers: [{
        type: Schema.Types.ObjectId,
        ref: customer
    }],
    owners: [{
        type: Schema.Types.ObjectId,
        ref: supportUser
    }],
    ticketStatus: {
        type: String,
        lowercase: true,
        enum: ['new', 'open', 'onhold', 'closed'],
        default: 'new'
    },
    actions: [{
        type: Schema.Types.ObjectId,
        ref: ticketAction
    }]
});

const ticket = mongoose.model('ticket', ticketSchema);

module.exports = ticket;