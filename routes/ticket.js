const express = require('express');
const router = express.Router();

const ticketCntrl = require('../controllers/ticket.js');


router.get('/', ticketCntrl.getHomeView );

router.get('/new', ticketCntrl.getTicketForm );

router.post('/', ticketCntrl.createTicket );

router.get('/:id', ticketCntrl.getTicket );






module.exports = router;