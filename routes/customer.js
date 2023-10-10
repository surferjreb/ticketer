const express = require('express');
const router = express.Router();
const expressError = require('../utils/ExpressError');

const customerCntrl = require('../controllers/customer.js');
const { customerValSchema } = require('../utils/validateSchemas');


const _validateCustomer = (req, res, next) => {
    const { error } = customerValSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new expressError(msg, 400);
    } else {
        next();
    }
}

router.get('/', customerCntrl.getHomeView );

router.post('/', _validateCustomer, customerCntrl.createCustomer );

router.get('/new', customerCntrl.getCustomerForm );

router.get('/show/:id', customerCntrl.getCustomerView );

router.put('/show/:id', _validateCustomer, customerCntrl.editCustomer );

router.delete('/show/:id', customerCntrl.deleteCustomer );

module.exports = router;