const supportUser = require('../models/supportUsers');
require('../models/db');

const supportSeed = [
    {
        firstName: 'James',
        lastName: 'Brown',
        email: 'surferjreb@live.com',
    },
    {
        firstName: 'Fred',
        lastName: 'Durst',
        email: 'soggyBiscutt@live.com',
    }
]

const s = supportUser.insertMany(supportSeed);

console.log(s);
