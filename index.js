const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejsmate = require('ejs-mate');
const methodOverride = require('method-override');

const app = express();
const port = 8080;


app.set('view engine', 'ejs');
mongoose.set('strictQuery', true);
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ticketer', { });
}

main().then(() => {
    console.log("Connection Open!!");
}).catch( err => {
    console.log("Whoops...");
});

app.get('/', (req, res) => {
    res.send("You have made it");
})

app.listen(port, () => {
    console.log(`listening at port: ${port}`);
});