const company = require( '../models/company' );
const customer = require( '../models/customer' );
const catchAsync = require( '../utils/catchAsync' );

//view all companies
const _getHomeView = catchAsync( async(req, res) => {
    const companies = await company.find({});

    res.render('company/companiesList', { title: 'Companies', companies});
});

// view a company and customers
const _getCompanyView = catchAsync( async(req, res) => {
    const { id } = req.params;
    const comp = await company.findById(id).populate( 'customers' );
    const custs = await customer.find({});

    res.render('company/show', { title: 'Company', comp, custs });
});

// edit a company
const _editCompany = catchAsync( async(req, res) => {
    
});

// add a new company
const _addACompany = catchAsync( async(req, res) => {

});

// add customer to company
const _addCompanyWorker = catchAsync( async(req, res) => {
    const comp = await company.findById(req.params.id);
    console.log(req.body.customer.id);
    
    console.log(comp)
    res.redirect(`/companies/show/${comp._id}`);
});


// remove a customer from a company
const _removeCompanyWorker = catchAsync( async(req, res) => {

});

// delete a company
const _deleteCompany = catchAsync( async(req, res) => {

});

module.exports.getHomeView = _getHomeView;
module.exports.getCompanyView = _getCompanyView;
module.exports.editCompany = _editCompany;
module.exports.addACompany = _addACompany;
module.exports.addCompanyWorker = _addCompanyWorker;
module.exports.removeCompanyWorker = _removeCompanyWorker;
module.exports.deleteCompany = _deleteCompany;
