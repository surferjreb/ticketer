const mongoose = require('mongoose');
const ticket = require('../models/ticket');
const supportUser = require('../models/supportUser');
const expressError = require('../utils/ExpressError');

const _getHomeView = async (req, res) => {
    const tickets = await ticket.find();
    if(!tickets) throw new expressError('Unable to access tickets', 404);
    
    res.render( 'index', { title: 'Ticketer', tickets } );
}


module.exports.getHomeView = _getHomeView;