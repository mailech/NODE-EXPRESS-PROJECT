
const Contact = require('../models/CrudExpress.model')
const displayAllContacts = async(req,res)=>{
    const contacts = await Contact.find();
    // res.json(contacts)
    res.render('home',{contacts});
}

const displaySingleData = async(req,res)=>{
    const contact  = await Contact.findOne({_id:req.params.id})
    res.render('show-contact',{contact});
}

const displayForm = (req,res)=>{
    res.render('add-contact');
}

const saveData = async(req,res)=>{
    await Contact.create(req.body)
    res.redirect('/')
}

const update  =async(req,res)=>{
    const contact  = await Contact.findById(req.params.id)
    res.render('update-contact',{contact});
}

const updateData = async(req,res)=>{
    await Contact.findByIdAndUpdate(req.params.id,req.body)
    res.redirect('/')
}

const data = async(req,res)=>{
    // res.render('delete-contact');
    await Contact.findByIdAndDelete(req.params.id)
    res.redirect('/')
}

module.exports = {
    displayAllContacts,
    displaySingleData,
    displayForm,
    saveData,
    update,
    updateData,
    data
}