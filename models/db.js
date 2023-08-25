const mongoose = require('mongoose');
const ticketDB = 'mongodb://127.0.0.1:27017/ticketer';

const ticket = async () => {
    await mongoose.connect(ticketDB);
}


ticket().then(() => {
    console.log("Connection Open!!");
}).catch( err => {
    console.log("Whoops...");
    console.log( err );
});

module.exports = ticket;