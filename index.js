const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Contact = require('./models/CrudExpress.model');


mongoose.connect('mongodb://127.0.0.1:27017/CrudExpress')
.then(() => {
    console.log("Connected to mongoDB");

})

//middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}))

//Routing
app.get('/',async(req,res)=>{
    const contacts = await Contact.find();
    // res.json(contacts)
    res.render('home',{contacts});
})

app.get('/show-contact/:id',async(req,res)=>{
    const contact  = await Contact.findOne({_id:req.params.id})
    res.render('show-contact',{contact});
})

app.get('/add-contact',(req,res)=>{
    res.render('add-contact');
})

app.post('/add-contact',async(req,res)=>{
    await Contact.create(req.body)
    res.redirect('/')
})

app.get('/update-contact/:id',async(req,res)=>{
    const contact  = await Contact.findById(req.params.id)
    res.render('update-contact',{contact});
})

app.post('/update-contact/:id',async(req,res)=>{
    await Contact.findByIdAndUpdate(req.params.id,req.body)
    res.redirect('/')
})

app.get('/delete-contact/:id',async(req,res)=>{
    // res.render('delete-contact');
    await Contact.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000");
})
