const mongoose = require('mongoose');
const ticket = require('../models/ticket');
const supportUser = require('../models/supportUser');


const _getHomeView = async (req, res) => {
    const tickets = await ticket.find();
    
    res.render( 'index', { title: 'Ticketer', tickets: tickets } );
}


module.exports.getHomeView = _getHomeView;