const mongoose = require('mongoose');
const company = require('../models/company');

require('../models/db');

const seedCompanies = [
    {
        companyName: 'G-suite',
        companyUrl: 'gsuite.com',
    },
    {
        companyName: 'techJunkies',
        companyUrl: 'techjunkies.com'
    },
    {
        companyName: 'Congrant',
        companyUrl: 'congrant.com'
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
