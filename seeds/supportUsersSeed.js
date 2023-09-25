const supportUser = require('../models/supportUser');
const db = require('../models/db');
const mongoose = require('mongoose');

console.log(db);

const supportSeed = [
    {
        _id: "64e3d07d38bb82a3417258a9",
        firstName: 'James',
        lastName: 'Brown',
        email: 'surferjreb@live.com',
    },
    {
        _id: "64e3d07d38bb82a3417258aa",
        firstName: 'Fred',
        lastName: 'Durst',
        email: 'soggyBiscutt@live.com',
    }
]

const seedDB = async () => {
    for(let seed of supportSeed) {
        const sup = new supportUser(seed);
        console.log(sup);
        await sup.save();
    }
}

// const seedDB = async () => {
//     const sup = await supportUser.findOneAndUpdate({ firstName: 'James'}, {_id: Object("64e3d07d38bb82a3417258a9")});
//     console.log(sup._id);
//     await sup.save();   
// }

seedDB().then(() => {
    mongoose.connection.close();
});
