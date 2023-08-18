const mongoose = require('mongoose');


const gracefulShutdown = (msg, callback) => {
    mongoose.connection.disconnect( () => {
        console.log('Database disconnected: ' + msg);
        callback();
    });
}

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ticketer');
}

main().then(() => {
        console.log("Connection Open!!");
    }).catch( err => {
        console.log("Whoops...");
        console.log( err );
    });





