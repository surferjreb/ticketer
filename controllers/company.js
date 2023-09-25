const company = require( '../models/company' );
const customer = require( '../models/customer' );
const catchAsync = require( '../utils/catchAsync' );

const _getHomeView = catchAsync( async(req, res) => {
    const companies = await company.find({});

    res.render('company/companiesList', { title: 'Companies', companies});
});

const _getCompanyView = catchAsync( async(req, res) => {
    const { id } = req.params;
    const comp = await company.findById(id).populate( 'customers' );

    res.render('company/show', { title: 'Company', comp });
});


module.exports.getHomeView = _getHomeView;
module.exports.getCompanyView = _getCompanyView;
