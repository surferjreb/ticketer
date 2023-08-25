const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const ExpressError = require('./utils/ExpressError');
const db = require('./models/db.js');

const app = express();
const port = 8080;

const indexRouter = require('./routes/index.js');
const ticketRouter = require('./routes/ticket.js')
const supportRouter = require('./routes/supportUsers.js');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
mongoose.set('strictQuery', true);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));


app.use('/', indexRouter);
app.use('/tickets', ticketRouter);
app.use('/supportUser', supportRouter);

app.use((err, reg, res, next) => {
    const { statusCode=500 } = err;
    if(!err.message) err.message = "Run, Things wnet wrong...";
    res.status(statusCode).render('error', { title: 'Error', err});
});

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
});

app.listen(port, () => {
    //console.log(db);
    console.log(`listening at port: ${port}`);
});