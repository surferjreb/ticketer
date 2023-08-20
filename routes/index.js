const express = require('express');
const router = express.Router();

const mainCntrl = require('../controllers/main.js');


router.get('/', mainCntrl.getHomeView );


module.exports = router;