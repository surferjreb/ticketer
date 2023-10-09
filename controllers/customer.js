
const customer = require('../models/customer');
const catchAsync = require('../utils/catchAsync');
const expressError = require('../utils/ExpressError');

const _getHomeView = catchAsync(async (req, res) => {
    const customers = await customer.find({});
    if(!customers) throw new expressError('Unable to get Customers', 404);
    res.render( 'customer/customerList', { title: 'Customers', customers} );
});

const _getCustomerView = catchAsync(async (req, res) => {
    const { id } = req.params;

    cust = await customer.findById(id);
    if(!cust) throw new expressError("Unable to find customer", 404);

    res.render('customer/show', { title: 'Customer', cust} );

});

const _getCustomerForm = (req, res) => {
    res.render('customer/new', {title: 'New Customer' });
}


const _createCustomer = catchAsync( async(req, res) => {
    const newCustomer = new customer({ ...req.body.customer });

    const cust = await newCustomer.save();
    if(!cust) throw new expressError('Unable to create customer', 404);

    res.redirect(`/customers/show/${cust._id}`);
});

const _editCustomer = catchAsync(async(req, res) => {
    const { id } = req.params;
    const cust = await customer.findByIdAndUpdate(id, { ...req.body.cust });
    if(!cust) throw new expressError('Unable to edit customer', 404);
    res.redirect(`/customers/show/${ id }`);
});

const _deleteCustomer = catchAsync(async(req, res) => {
    const { id } = req.params
    const cust = await customer.findByIdAndDelete(id);
    if(!cust) throw new expressError('Unable to find to delete', 404);
    
    res.redirect('/customers');
})


module.exports.getHomeView = _getHomeView;
module.exports.getCustomerView = _getCustomerView;
module.exports.getCustomerForm = _getCustomerForm;
module.exports.createCustomer = _createCustomer;
module.exports.editCustomer = _editCustomer;
module.exports.deleteCustomer = _deleteCustomer;
