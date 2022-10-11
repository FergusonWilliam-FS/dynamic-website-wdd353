const express = require("express");
const app = express();
const router = require("../routes/routes");

app.use(express.urlencoded({extended: true}));
// all requests will handle json
app.use(express.json());
// handle CORS
app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE');
        next();
    }
});
    // middleware for EJS templating 18:55

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);


// static site middleware
app.use(express.static('public'));
app.use(express.static('views'));
app.use('/', router);


// error handling middleware

app.use((req, res, next) => {
    const error = new Error('Not found!!!');
    error.status = 404;
    next(error)
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
        },
    });
});

module.exports = app;
