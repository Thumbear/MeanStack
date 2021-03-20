require('./server/config/config');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const rtsIndex = require('./routes/index.router');

var app = express();



// middleware 

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({
        extended: true
    })) // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(cors());
app.listen(process.env.PORT, () => console.log('server start st port : ' + process.env.PORT));
app.use('/api', rtsIndex)


// error handler
app.use((err, req, res, next) => {
    if (err.name == "ValidationError") {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].messege));
        res.status(422).send(valErrors)
    }
});