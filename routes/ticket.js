const express = require('express');
const router = express.Router();

const ticketCntrl = require('../controllers/ticket.js');


router.get('/', ticketCntrl.getHomeView );

router.get('/new', ticketCntrl.getTicketForm );

router.post('/', ticketCntrl.createTicket );

router.get('/:id', ticketCntrl.getTicket );

router.put('/:id', ticketCntrl.subEditTicket );

router.get('/edit/:id', ticketCntrl.editTicket );

router.delete('/edit/:id', ticketCntrl.deleteTicket );

router.put('/edit/:id/addAction/', ticketCntrl.addAction );




module.exports = router;