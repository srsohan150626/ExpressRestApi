const express = require('express');
const router = require("./src/routes/api");
const app = new express();

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

//Request Rate limiting
const limiter = expressRateLimit({
    windowMs: 15*60*1000, // 15 miniutes
    max: 100 //limit each ip to 100 request per window
})
app.use(limiter);

app.use("/api/v1", router);

//undefined route
app.use('*', (req, res) => {
    res.status(404).json({success: 'failed', message: 'Undefined route!'});
})
module.exports = app;