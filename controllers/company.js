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
    const comp = await company.findById(id);
    const custs = await customer.find({ company: comp._id });

    res.render('company/show', { title: 'Company', comp, custs });
});

// edit a company
const _editCompany = catchAsync( async(req, res) => {
    
});

// add a new company
const _addACompany = catchAsync( async(req, res) => {
    res.render('company/new', { 'title': 'New Company' });
});

const _addCompany =  catchAsync( async(req, res) => {
    const newCompany = new company({
        companyName: req.body.comp.companyName,
        companyUrl: req.body.comp.companyUrl
    });

    await newCompany.save();
    res.redirect(`companies/show/${newCompany._id}`);

});

// delete a company
const _deleteCompany = catchAsync( async(req, res) => {

});

module.exports.getHomeView = _getHomeView;
module.exports.getCompanyView = _getCompanyView;
module.exports.editCompany = _editCompany;
module.exports.addACompany = _addACompany;
module.exports.addCompany = _addCompany;
module.exports.deleteCompany = _deleteCompany;
