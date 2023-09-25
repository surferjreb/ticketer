const express = require('express');
const router = express.Router();

const customerCntrl = require('../controllers/customer.js');

router.get('/', customerCntrl.getHomeView );

router.post('/', customerCntrl.createCustomer );

router.get('/new', customerCntrl.getCustomerForm );

router.get('/show/:id', customerCntrl.getCustomerView );

router.put('/show/:id', customerCntrl.editCustomer );

router.delete('/show/:id', customerCntrl.deleteCustomer );

module.exports = router;