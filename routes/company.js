const express = require('express');
const router = express.Router();

const companyCntrl = require('../controllers/company');
const expressError = require('../utils/ExpressError');
// const { companyValSchema } = require('../utils/validateSchemas');


// const _validateCompany = (req, res, next) => {
//     const { error } = companyValSchema.validate(req.body.comp);
//     if (error) {
//         const msg = error.details.map(el => el.message).join(',');
//         throw new expressError(msg, 400);
//     } else {
//         next;
//     }
//}


router.get('/', companyCntrl.getHomeView );

router.get('/new', companyCntrl.addACompany );

router.post('/new', companyCntrl.addCompany );

router.get('/show/:id', companyCntrl.getCompanyView );

router.get('/edit/:id', companyCntrl.editACompany );

router.put('/edit/:id', companyCntrl.editCompany );

router.delete('/edit/:id', companyCntrl.deleteCompany );



module.exports = router;

