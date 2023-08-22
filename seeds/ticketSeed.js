const ticket = require('../models/ticket')
require('../models/db');


const ticketSeed = [
    {
        date: '21/08/23',
        time: '14:00:00',
        ticketNumber: 1,
        title: "Test",
        description: 'Some stuff will go here',
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
        date: '21/08/23',
        time: '17:00:00',
        ticketNumber: 2,
        title: "Test 2",
        description: 'Some other stuff will go here',
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
        ticketStatus: 'open'
    },
]

const ts = ticket.insertMany(ticketSeed);

console.log(ts);