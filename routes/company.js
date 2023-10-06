const express = require('express');
const router = express.Router();

const companyCntrl = require('../controllers/company');

router.get('/', companyCntrl.getHomeView );

router.get('/new', companyCntrl.addACompany );

router.post('/new', companyCntrl.addCompany );

router.get('/show/:id', companyCntrl.getCompanyView );



module.exports = router;

