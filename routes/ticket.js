const express = require('express');
const router = express.Router();
const expressError = require('../utils/ExpressError');
const { ticketValSchema } = require('../utils/validateSchemas');

const ticketCntrl = require('../controllers/ticket.js');

const _validateTicket = (req, res, next) => {
    const { error } = ticketValSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new expressError(msg, 400);
    } else {
        next();
    }
}

router.get('/', ticketCntrl.getHomeView );

router.get('/new', ticketCntrl.getTicketForm );

router.post('/', _validateTicket, ticketCntrl.createTicket );

router.get('/:id', ticketCntrl.getTicket );

router.put('/:id', ticketCntrl.subEditTicket );

router.get('/edit/:id', ticketCntrl.editTicket );

router.delete('/edit/:id', ticketCntrl.deleteTicket );

router.put('/edit/:id/addAction/', ticketCntrl.addAction );




module.exports = router;