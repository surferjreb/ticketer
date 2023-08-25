const mongoose = require('mongoose');
const ticket = require('../models/ticket');
const supportUser = require('../models/supportUser');
const company = require('../models/company');
const customer = require('../models/customer');
const catchAsync = require('../utils/catchAsync');


const _getHomeView = catchAsync(async (req, res) => {
    const openTickets = await ticket.find({'ticketStatus': 'open' });
    const onHoldTickets = await ticket.find({'ticketStatus': 'onhold' });
    const closedTickets = await ticket.find({'ticketStatus': 'closed' });
    
    res.render( 'ticket/ticketList', { title: 'Ticketer', openTickets, onHoldTickets, closedTickets } );
});

const _getTicket = catchAsync(async (req, res) => {
    const { id } = req.params;
    
    const tickDetail = await ticket.findById(id);
    const owners = await supportUser.findById(tickDetail.owners);
    const companies = await company.findById(tickDetail.companies);
    const customers = await customer.findById(tickDetail.customers);
    res.render( 'ticket/show', { title: 'Ticket', tickDetail, owners , companies, customers });
});

const _getTicketForm = catchAsync( async (req, res, next) => {
    const companies = await company.find({});
    const owners = await supportUser.find({});
    const customers = await customer.find({});

    res.render('ticket/new', { title: 'New Ticket', owners, companies, customers });
});

const _createTicket = catchAsync( async (req, res) => {
    const newTicket = new ticket(req.body.ticket);
    console.log(newTicket.customers);
    res.send('success');
});

module.exports.getHomeView = _getHomeView;
module.exports.getTicket = _getTicket;
module.exports.getTicketForm = _getTicketForm;
module.exports.createTicket = _createTicket;