
const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    fisrt_name:{
        type:String
    },
    last_name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type: Number
    },
    address:{
        type:String
    }
})
const contact = mongoose.model("Contact",contactSchema)
module.exports = contact;