const mongoose = require('mongoose');
const company = require('../models/company');

require('../models/db');

const seedCompanies = [
    {
        companyName: 'G-suite',
        companyUrl: 'https://gsuite.com',
    },
    {
        companyName: 'techJunkies',
        companyUrl: 'https://techjunkies.com'
    },
    {
        companyName: 'Congrant',
        companyUrl: 'https://congrant.com'
    },
    {
        companyName: 'Unknown',
        companyUrl: 'Unknown'
    }
]

const c = company.insertMany(seedCompanies)
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log('Crud...');
    console.log(err);
})
