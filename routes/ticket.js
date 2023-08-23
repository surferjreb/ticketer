const express = require('express');
const router = express.Router();

const ticketCntrl = require('../controllers/ticket.js');


router.get('/', ticketCntrl.getHomeView );


module.exports = router;