const mongoose = require('mongoose');
const ticket = require('../models/ticket');
const supportUser = require('../models/supportUser');
const company = require('../models/company');
const customer = require('../models/customer');
const ticketAction = require('../models/ticketAction');
const catchAsync = require('../utils/catchAsync');


const _getHomeView = catchAsync(async (req, res) => {
    const newTickets = await ticket.find({ 'ticketStatus': 'new'});
    const openTickets = await ticket.find({'ticketStatus': 'open' });
    const onHoldTickets = await ticket.find({'ticketStatus': 'onhold' });
    const closedTickets = await ticket.find({'ticketStatus': 'closed' });
    
    res.render( 'ticket/ticketList', { title: 'Ticketer', newTickets, openTickets, onHoldTickets, closedTickets } );
});

const _getTicket = catchAsync(async (req, res) => {
    const { id } = req.params;
    
    const tickDetail = await ticket.findById(id).populate('actions owners companies customers');
    
    res.render( 'ticket/show', { title: 'Ticket', tickDetail});
});

const _getTicketForm = catchAsync( async (req, res, next) => {
    const companies = await company.find({});
    const owners = await supportUser.find({});
    const customers = await customer.find({});

    res.render('ticket/new', { title: 'New Ticket', owners, companies, customers });
});

const _createTicket = catchAsync( async (req, res, next) => {
    const newDate = new Date().toJSON().split('T');
    
    const newTicket = new ticket({
        date: `${newDate[0]}`,
        time: `${newDate[1]}`,
        ticketNumber: `${await ticket.find({}).count() + 1}`,
        title: `${req.body.ticket.title}`,
        description: `${req.body.ticket.description}`,
        companies: `${req.body.ticket.companies}`,
        customers: `${req.body.ticket.customers}`,
        owners: `${req.body.ticket.owners}`
    });

    await newTicket.save();
    res.redirect(`/tickets/${newTicket._id}`);
});

const _editTicket = catchAsync( async (req, res, next) => {
    const { id } = req.params;
    const tic = await ticket.findById(id);
    //console.log(tic.description);
    const customers = await customer.findById(tic.customers)
    const companies = await company.findById(tic.companies)
    const owners = await supportUser.findById(tic.owners)
    res.render('ticket/edit', {title: 'Edit', ticket: tic, customers, companies, owners });
})

const _subEditTicket = catchAsync( async (req, res, next) => {
    const { id } = req.params;
    const tic = await ticket.findByIdAndUpdate(id, { ...req.body.ticket });
    res.redirect(`/tickets/${tic._id}`);
})

const _addAction = catchAsync( async (req, res, next) => {
    const { id } = req.params;
    const dateTime = new Date().toISOString();
    const action = new ticketAction({
        date: `${dateTime.substring(0, 10)}`,
        time: `${dateTime.substring(11)}`,
        description: `${req.body.action.description}`
    });
    await action.save();

    const tic = await ticket.findById(id);
    
    if(tic.ticketStatus === 'new'){
        tic.ticketStatus = 'open';
    }

    tic.actions.push(action);

    await tic.save();
    res.redirect(`/tickets/${tic._id}`);
})


module.exports.getHomeView = _getHomeView;
module.exports.getTicket = _getTicket;
module.exports.getTicketForm = _getTicketForm;
module.exports.createTicket = _createTicket;
module.exports.editTicket = _editTicket;
module.exports.subEditTicket = _subEditTicket;
module.exports.addAction = _addAction;