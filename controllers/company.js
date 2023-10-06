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
    const { id } = req.params;

    const comp = await company.findByIdAndUpdate( id, { ...req.body.comp });

    res.redirect(`/companies/show/${ comp._id }`);
});

const _editACompany = catchAsync( async(req, res) => {
    const { id } = req.params
    
    const comp = await company.findById(id);
    
    res.render('company/edit', { 'title': `Edit ${comp.companyName}`, comp } );
});

// add a new company
const _addACompany = catchAsync( async(req, res) => {
    res.render('company/new', { 'title': 'New Company' });
});

const _addCompany =  catchAsync( async(req, res) => {
    //console.log(req.body.comp);
    const newCompany = new company({
        companyName: req.body.comp.companyName,
        companyUrl: req.body.comp.companyUrl
    });

    const comp = await newCompany.save();
    //console.log(comp._id);
    res.redirect(`/companies/show/${comp._id}`);

});

// delete a company
const _deleteCompany = catchAsync( async(req, res) => {
    const { id } = req.params

    const comp = await company.findByIdAndDelete(id);

    res.redirect('/companies');
});

module.exports.getHomeView = _getHomeView;
module.exports.getCompanyView = _getCompanyView;
module.exports.editCompany = _editCompany;
module.exports.editACompany = _editACompany;
module.exports.addACompany = _addACompany;
module.exports.addCompany = _addCompany;
module.exports.deleteCompany = _deleteCompany;
