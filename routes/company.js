const express = require('express');
const router = express.Router();

const companyCntrl = require('../controllers/company');

router.get('/', companyCntrl.getHomeView );

router.get('/new', companyCntrl.addACompany );

router.post('/new', companyCntrl.addCompany );

router.get('/show/:id', companyCntrl.getCompanyView );

router.get('/edit/:id', companyCntrl.editACompany );

router.put('/edit/:id', companyCntrl.editCompany );

router.delete('/edit/:id', companyCntrl.deleteCompany );



module.exports = router;

