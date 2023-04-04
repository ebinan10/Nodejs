const express = require('express');
const env = require('dotenv').config();
const mongoose = require('mongoose');
const Route1 = require('./router/route1/Route1');
const Route2 = require('./router/route2/Route2');
const Route3 = require('./router/route3/Route3');
const User = require('./router/user/User');
const Route5 = require('./router/route5/Route5');
const cors = require('cors')

const app = express();
 
app.use(express.json()) 
app.use(cors({origin:true,credentials: true} ))

mongoose.connect(process.env.Uri).then(()=>{
    app.listen(process.env.Port, 
    console.log("server is running now!!!"))
        app.use('/user', User)
    // app.use('/route1', Route1)
    // app.use('/route2', Route2)
    // app.use('/route3', Route3)
    // app.use('/route5', Route5) 
    }) 
    .catch(err=>{
    console.log(err)
}) 
 
