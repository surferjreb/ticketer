const mongoose = require('mongoose');
const ticketDB = 'mongodb://127.0.0.1:27017/ticketer';

const _gracefulShutdown = (msg, callback) => {
    mongoose.connection.disconnect( () => {
        console.log('Database disconnected: ' + msg);
        callback();
    });
}

const _ticket = async () => {
    await mongoose.connect(ticketDb);
}

const connectDB = 


_ticket().then(() => {
        console.log("Connection Open!!");
    }).catch( err => {
        console.log("Whoops...");
        console.log( err );
    });





