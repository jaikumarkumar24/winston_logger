const config =  require('./config.js');
const express =  require('express');
const app =  express();

const logger = require('./utils/logger');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const api = require('./db/dbConfig');
app.use('/api',api);

console.log(`NODE_ENV=${config.NODE_ENV}`);

app.get('/',(req,res) => {
    res.send("Hello World!");
    logger.info("Server Sent A Hello World!");
})

// Introduce error by using undefined variable 'y'
app.get('/calc',(req,res) => {
    const x = y + 10;
    res.send(x.toString());
})

// Capture 500 errors
app.use((err,req,res,next) => {
    res.status(500).send('Could not perform the calculation!');
       logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    })
    
// Capture 404 erors
app.use((req,res,next) => {
    res.status(404).send("PAGE NOT FOUND");
    logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
})

// Run the server
app.listen(config.PORT, config.HOST, () => {
    console.log("Server started...");
    logger.info(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
})