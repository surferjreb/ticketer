const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const ExpressError = require('./utils/ExpressError');
const db = require('./models/db.js');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();
const port = 8080;

const sessionConfig = {
    secret: 'thisisabadsecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

const indexRouter = require('./routes/index.js');
const ticketRouter = require('./routes/ticket.js');
const customerRouter = require('./routes/customer.js');
const companyRouter = require('./routes/company.js');
const supportRouter = require('./routes/supportUsers.js');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
mongoose.set('strictQuery', true);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(session(sessionConfig));
app.use(flash());

// makes the success flash available for all templates
app.use((req, res, next ) => {
    
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

app.use('/', indexRouter);
app.use('/tickets', ticketRouter);
app.use('/supportUser', supportRouter);
app.use('/customers', customerRouter);
app.use('/companies', companyRouter);



app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
});

app.use((err, reg, res, next) => {
    const { statusCode=500 } = err;
    if(!err.message) err.message = "Run!!, Things went sideways...";
    res.status(statusCode).render('error', { title: 'Error', err});
});



app.listen(port, () => {
    //console.log(db);
    console.log(`listening at port: ${port}`);
});