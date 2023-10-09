const company = require( '../models/company' );
const customer = require( '../models/customer' );
const catchAsync = require( '../utils/catchAsync' );
const expressError = require('../utils/ExpressError');


// view all companies
const _getHomeView = catchAsync( async(req, res) => {
    const companies = await company.find({});
    if(!companies) throw new expressError('Unable to get any companies');
    res.render('company/companiesList', { title: 'Companies', companies});
});

// view a company and customers
const _getCompanyView = catchAsync( async(req, res) => {
    const { id } = req.params;
    const comp = await company.findById(id);
    if(!comp) throw new expressError('Unable to find company');
    const custs = await customer.find({ company: comp._id });
    if(!custs) throw new expressError('Unable to find any customers', 404);
    res.render('company/show', { title: 'Company', comp, custs });
});

// edit a company
const _editCompany = catchAsync( async(req, res) => {
    const { id } = req.params;

    const comp = await company.findByIdAndUpdate( id, { ...req.body.comp });
    if(!comp) throw new expressError('unable to update company');
    res.redirect(`/companies/show/${ comp._id }`);
});

const _editACompany = catchAsync( async(req, res) => {
    const { id } = req.params
    
    const comp = await company.findById(id);
    if(!comp) throw new expressError('Unable to edit company', 401);
    res.render('company/edit', { 'title': `Edit ${comp.companyName}`, comp } );
});

// add a new company
const _addACompany = catchAsync( async(req, res) => {
    res.render('company/new', { 'title': 'New Company' });
});

const _addCompany = catchAsync( async(req, res) => {
    const { companyName, companyUrl } = req.body.comp;

    const newCompany = new company({
        companyName: companyName,
        companyUrl: companyUrl
    });

    const comp = await newCompany.save();
    //console.log(comp._id);
    if(!comp) throw new expressError('Unable to add company', 401);
    res.redirect(`/companies/show/${comp._id}`);

});

// delete a company
const _deleteCompany = catchAsync( async(req, res) => {
    const { id } = req.params

    const comp = await company.findByIdAndDelete(id);
    if(!comp) throw new expressError('Unable to delete', 401);
    res.redirect('/companies');
});

module.exports.getHomeView = _getHomeView;
module.exports.getCompanyView = _getCompanyView;
module.exports.editCompany = _editCompany;
module.exports.editACompany = _editACompany;
module.exports.addACompany = _addACompany;
module.exports.addCompany = _addCompany;
module.exports.deleteCompany = _deleteCompany;
