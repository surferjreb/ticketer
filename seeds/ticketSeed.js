const mongoose = require('mongoose');
const ticket = require('../models/ticket');
const db = require('../models/db');

console.log(db);
const ticketSeed = [
    {
        date: '22/08/23',
        time: '15:00:00',
        ticketNumber: 11,
        title: "Test 11",
        description: 'More, More, More, More of Some stuff that should go here.',
        companies: [
            "64e3c7d516ac523a34fdaa03"
        ],
        customers: [
            "64e3c786e4a22be3eaefe702"
        ],
        owners: [
            "64e3d07d38bb82a3417258a9"
        ],
        ticketStatus: 'open'
    },
    {
        date: '22/08/23',
        time: '16:00:00',
        ticketNumber: 12,
        title: "Test 12",
        description: 'Things happened, some more things and then come more things.  Inspected customer logs, adjusted configuration.',
        companies: [
            "64e3c7d516ac523a34fdaa03"
        ],
        customers: [
            "64e3c786e4a22be3eaefe702",
            "64e18bea375e200765d4d485"
        ],
        owners: [
            "64e3d07d38bb82a3417258aa"
        ],
        ticketStatus: 'closed'
    },
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


