const express = require('express');
const router = require("./src/routes/api");
const app = new express();
const bodyParser= require('body-parser');

//security middleware import
const expressRateLimit = require('express-rate-limit')
const helmet = require('helmet')
const expressMongoSanitize = require('express-mongo-sanitize')
const xssClean = require('xss-clean')
const hpp = require('hpp')
const cors = require('cors')


//security middleware implementation
app.use(cors())
app.use(expressRateLimit())
app.use(helmet())
app.use(expressMongoSanitize())
app.use(xssClean())
app.use(hpp())

app.use(bodyParser.json());

//mongo db
const mongoose = require('mongoose');

//Request Rate limiting
const limiter = expressRateLimit({
    windowMs: 15 * 60 * 1000, // 15 miniutes
    max: 100 //limit each ip to 100 request per window
})
app.use(limiter);

let URI = "mongodb://127.0.0.1:27017/school";
let options = {user: '', pass: ''};
mongoose.connect(URI, options, (error) => {
    console.log("Database Connection successfully!");
    if (error) {
        console.log(error);
    }

})

app.use("/api/v1", router);

//undefined route
app.use('*', (req, res) => {
    res.status(404).json({success: 'failed', message: 'Undefined route!'});
})
module.exports = app;