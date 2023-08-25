const mongoose = require('mongoose');
const ticket = require('../models/ticket');
const supportUser = require('../models/supportUser');
const catchAsync = require('../utils/catchAsync');


const _getHomeView = catchAsync(async (req, res) => {
    const openTickets = await ticket.find({'ticketStatus': 'open' });
    const onHoldTickets = await ticket.find({'ticketStatus': 'onhold' });
    const closedTickets = await ticket.find({'ticketStatus': 'closed' });
    
    res.render( 'ticket/ticketList', { title: 'Ticketer', openTickets, onHoldTickets, closedTickets } );
});

const _getTicket = catchAsync(async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const tickDetail = await ticket.findById(id);
    res.render( 'ticket/show', { title: 'Ticket', tickDetail });
});


module.exports.getHomeView = _getHomeView;
module.exports.getTicket = _getTicket;