const userRouter  = require('./Routs/user.router');
const express = require('express');
const app = express();
const conNnectDb = require('./config/database')
const Contact = require('./models/CrudExpress.model');
const connectDb = require('./config/database');

//connect Database
conNnectDb();

//middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}))

//Routing
app.use('/',userRouter)


const PORT  = process.env.PORT || 3000
app.listen(PORT,(req,res)=>{
    console.log("Server is running on port:" +PORT);
})
