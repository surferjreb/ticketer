const express = require('express');
const router = express.Router();

const companyCntrl = require('../controllers/company');

router.get('/', companyCntrl.getHomeView );

router.get('/show/:id', companyCntrl.getCompanyView );

router.post('/show/:id/add/customers', companyCntrl.addCompanyWorker );

module.exports = router;

