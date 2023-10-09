const ticket = require('../models/ticket');
const supportUser = require('../models/supportUser');
const company = require('../models/company');
const customer = require('../models/customer');
const ticketAction = require('../models/ticketAction');
const catchAsync = require('../utils/catchAsync');
const expressError = require('../utils/ExpressError');


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
    if(!tickDetail) throw new ExpressError('Invalid Ticket', 404);
    res.render( 'ticket/show', { title: 'Ticket', tickDetail});
});

const _getTicketForm = catchAsync( async (req, res) => {
    const companies = await company.find({});
    const owners = await supportUser.find({});
    const customers = await customer.find({});
    
    res.render('ticket/new', { title: 'New Ticket', owners, companies, customers });
});

const _createTicket = catchAsync( async (req, res, next) => {
    const newDate = new Date();
    
    const newTicket = new ticket({
        date: `${newDate.toLocaleDateString()}`,
        time: `${newDate.toLocaleTimeString('en-US')}`,
        ticketNumber: `${await ticket.find({}).count() + 1}`,
        title: `${req.body.ticket.title}`,
        description: `${req.body.ticket.description}`,
        companies: `${req.body.ticket.companies}`,
        customers: `${req.body.ticket.customers}`,
        owners: `${req.body.ticket.owners}`
    });

    const tic = await newTicket.save();
    if(!tic) throw new expressError('Unable to create ticket', 401);
    res.redirect(`/tickets/${tic._id}`);
});

const _editTicket = catchAsync( async (req, res, next) => {
    const { id } = req.params;
    const tic = await ticket.findById(id).populate('customers companies owners');
    //console.log(tic.description);
    res.render('ticket/edit', {title: 'Edit', tic });
})

const _subEditTicket = catchAsync( async (req, res, next) => {
    const { id } = req.params;
    const tic = await ticket.findByIdAndUpdate(id, { ...req.body.ticket });
    if(!tic) throw new expressError('Unable to edit ticket', 401);
    res.redirect(`/tickets/${tic._id}`);
})

const _addAction = catchAsync( async (req, res, next) => {
    const { id } = req.params;
    const dateTime = new Date();
    const action = new ticketAction({
        date: `${dateTime.toLocaleDateString()}`,
        time: `${dateTime.toLocaleTimeString()}`,
        description: `${req.body.action.description}`
    });
    
    const newAction = await action.save();
    if(!newAction) throw new expressError('Unable to add action', 404);

    const tic = await ticket.findById(id);
    if(!tic) throw new expressError('unable to find ticket', 404);

    if(tic.ticketStatus === 'new'){
        tic.ticketStatus = 'open';
    }

    tic.actions.push(action);

    const newTicket = await tic.save();
    res.redirect(`/tickets/${newTicket._id}`);
})

const _deleteTicket = catchAsync( async (req, res) => {
    const { id } = req.params;

    const tic = await ticket.findByIdAndDelete(id);
    if(!tic) { throw new expressError('Unable to delete', 404)}
    res.redirect('/tickets');
})


module.exports.getHomeView = _getHomeView;
module.exports.getTicket = _getTicket;
module.exports.getTicketForm = _getTicketForm;
module.exports.createTicket = _createTicket;
module.exports.editTicket = _editTicket;
module.exports.subEditTicket = _subEditTicket;
module.exports.addAction = _addAction;
module.exports.deleteTicket = _deleteTicket;