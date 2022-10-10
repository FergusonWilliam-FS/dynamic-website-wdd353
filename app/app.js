const express = require("express");
const app = express();

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
    // middleware for EJS templating 18:55
});
