const customer = require('../models/customer');
require('../models/db');

const customerSeeds = [
    {
        firstName: 'Jim',
        lastName: 'Brown',
        email: 'nikeball1@live.com',
        company: "651f5b906ef8ddcef4a2f8fc"
    },
    {
        firstName: 'Bob',
        lastName: 'Kinsinger',
        email: 'bigbk@gmail.com',
        company: "651f5b906ef8ddcef4a2f8fe"
    },
    {
        firstName: 'Jackey',
        lastName: 'Kennedy',
        email: 'jackieo@gmail.com',
        company: "651f5b906ef8ddcef4a2f8fc"
    },
    {
        firstName: 'Alias',
        lastName: 'Wonderton',
        email: 'cheshirecat@live.com',
        company: "651f5b906ef8ddcef4a2f8fe"
    },
    {
        firstName: 'Marshall',
        lastName: 'Mathers',
        email: 'supergoat@live.com',
        company: "651f5b906ef8ddcef4a2f8fe"
    },
    {
        firstName: 'Frank',
        lastName: 'Sinatra',
        email: 'twoOlives@live.com',
        company: "651f5b906ef8ddcef4a2f8fc"
    },
    {
        firstName: 'Jimmy',
        lastName: 'Hendrix',
        email: 'castleMagic@live.com',
        company: "651f5b906ef8ddcef4a2f8fc"
    }
]

const c = customer.insertMany(customerSeeds)
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log('Crap...');
    console.log(err);
});

console.log(c);
