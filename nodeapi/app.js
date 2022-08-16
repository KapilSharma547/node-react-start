const express = require('express');
const app = express()
// console.log(app);
const mongoose = require('mongoose');

const morgan = require("morgan"); //miidleware
const bodyParser = require('body-parser')

// const dotenv = require('dotenv');
// dotenv.config()


//for error
mongoose.connection.on('error', err => {
    //    console.log(` DB connection error: ${err.message}`)
})

//bring in routes
const postRoutes = require('./validator/post')

// const myOwnMiddleware = (req, res, next) => {
    //     console.log('middleware applied!!!')
    //     next();
    // }
    
    
    //use middleware
    app.use(morgan('dev'));
    app.use(bodyParser.json()) //for see body
    // app.use(myOwnMiddleware);
    // app.use(expressVAlidator());
    app.use("/", postRoutes);
    
    
    
    
    
    //datatbsw
    const url = "mongodb://localhost/27017"
    const port = 8080;
    app.listen(port, () => {
        mongoose.connect(url).then(() => console.log("DB Connected"))
        console.log(`A Node Api is listing on Port: ${port} `)
    });