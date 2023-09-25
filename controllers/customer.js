
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

});

const _getCustomerForm = (req, res) => {
    res.render('customer/new', {title: 'New Customer' });
}


const _createCustomer = catchAsync( async(req, res) => {
    const newCustomer = new customer({ ...req.body.customer });

    await newCustomer.save();

    res.redirect('/customers');
});

const _editCustomer = catchAsync(async(req, res) => {
    const { id } = req.params;
    const cust = await customer.findByIdAndUpdate(id, { ...req.body.cust });
    
    res.redirect(`/customers/show/${ id }`);
});

const _deleteCustomer = catchAsync(async(req, res) => {
    const { id } = req.params
    const cust = await customer.findByIdAndDelete(id);

    res.redirect('/customers');
})


module.exports.getHomeView = _getHomeView;
module.exports.getCustomerView = _getCustomerView;
module.exports.getCustomerForm = _getCustomerForm;
module.exports.createCustomer = _createCustomer;
module.exports.editCustomer = _editCustomer;
module.exports.deleteCustomer = _deleteCustomer;
