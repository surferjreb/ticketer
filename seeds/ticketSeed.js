const mongoose = require('mongoose');
const ticket = require('../models/ticket');
const db = require('../models/db');

console.log(db);
const ticketSeed = [
    {
        date: '22/09/23',
        time: '15:00:00',
        ticketNumber: 1,
        title: "Test 1",
        description: 'More, More, More, More of Some stuff that should go here.',
        companies: [
            "651f5b906ef8ddcef4a2f8fe"
        ],
        customers: [
            "651f5d475b22a2453b162dea"
        ],
        owners: [
            "64e3d07d38bb82a3417258a9"
        ],
        ticketStatus: 'open'
    },
    {
        date: '22/09/23',
        time: '16:00:00',
        ticketNumber: 2,
        title: "Test 2",
        description: 'Things happened, some more things and then come more things.  Inspected customer logs, adjusted configuration.',
        companies: [
            "651f5b906ef8ddcef4a2f8fc"
        ],
        customers: [
            "651f5d475b22a2453b162de9",
            "651f5d475b22a2453b162dea"
        ],
        owners: [
            "64e3d07d38bb82a3417258aa"
        ],
        ticketStatus: 'closed'
    },
    {
        date: '22/08/23',
        time: '15:00:00',
        ticketNumber: 3,
        title: "Test 3",
        description: 'More, More, More, More of Some stuff that should go here.',
        companies: [
            "651f5b906ef8ddcef4a2f8fe"
        ],
        customers: [
            "651f5d475b22a2453b162de7"
        ],
        owners: [
            "64e3d07d38bb82a3417258a9"
        ],
        ticketStatus: 'open'
    },
    {
        date: '22/08/23',
        time: '15:00:00',
        ticketNumber: 4,
        title: "Test 4",
        description: 'More, More, More, More of Some stuff that should go here.',
        companies: [
            "651f5b906ef8ddcef4a2f8fc"
        ],
        customers: [
            "651f5d475b22a2453b162de5"
        ],
        owners: [
            "64e3d07d38bb82a3417258aa"
        ],
        ticketStatus: 'open'
    },
    {
        date: '22/08/23',
        time: '15:00:00',
        ticketNumber: 5,
        title: "Test 5",
        description: 'More, More, More, More of Some stuff that should go here.',
        companies: [
            "651f5b906ef8ddcef4a2f8fe"
        ],
        customers: [
            "651f5d475b22a2453b162de6"
        ],
        owners: [
            "64e3d07d38bb82a3417258a9"
        ],
        ticketStatus: 'open'
    }
]

const seedDB = async () => {
    for(let seed of ticketSeed ) {
        const ts = new ticket(seed);
        console.log(ts);
        await ts.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});


