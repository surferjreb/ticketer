const express = require('express');
const router = express.Router();

const customerCntrl = require('../controllers/customer.js');

router.get('/', customerCntrl.getHomeView );

router.get('/show/:id', customerCntrl.getCustomerView );

module.exports = router;