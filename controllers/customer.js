const mongoose = require('mongoose');

const customer = require('../models/customer');
const catchAsync = require('../utils/catchAsync');

const _getHomeView = catchAsync(async (req, res) => {
    const customers = await customer.find({});
    
    res.render( 'customer/customerList', { title: 'Customers', customers} );
});

const _getCustomerView = catchAsync(async (req, res) => {
    const { id } = req.params;

    cust = await customer.findById(id);

    res.render('customer/show', { title: 'Customer', cust} );

})

module.exports.getHomeView = _getHomeView;
module.exports.getCustomerView = _getCustomerView;