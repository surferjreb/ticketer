const customer = require('../models/customer');
require('../models/db');

const customerSeeds = [
    {
        firstName: 'Jim',
        lastName: 'Brown',
        email: 'nikeball1@live.com'
    },
    {
        firstName: 'Bob',
        lastName: 'Kinsinger',
        email: 'bigbk@gmail.com'
    },
    {
        firstName: 'Jackey',
        lastName: 'Kennedy',
        email: 'jackieo@gmail.com'
    },
    {
        firstName: 'Alias',
        lastName: 'Wonderton',
        email: 'cheshirecat@live.com'
    },
    {
        firstName: 'Marshall',
        lastName: 'Mathers',
        email: 'supergoat@live.com'
    },
    {
        firstName: 'Frank',
        lastName: 'Sinatra',
        email: 'twoOlives@live.com'
    },
    {
        firstName: 'Jimmy',
        lastName: 'Hendrix',
        email: 'castleMagic@live.com'
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
