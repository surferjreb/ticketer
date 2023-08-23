const mongoose = require('mongoose');
const ticket = require('../models/ticket');
const supportUser = require('../models/supportUser');


const _getHomeView = async (req, res) => {
    const openTickets = await ticket.find({'ticketStatus': 'open' });
    const onHoldTickets = await ticket.find({'ticketStatus': 'onhold' });
    const closedTickets = await ticket.find({'ticketStatus': 'closed' });
    
    res.render( 'ticket/tickets', { title: 'Ticketer', openTickets: openTickets, onHoldTickets: onHoldTickets, closedTickets: closedTickets } );
}


module.exports.getHomeView = _getHomeView;