require('dotenv').config()
const mongoose = require('mongoose');
const connectDb = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Connected to mongoDB");
        })
}
module.exports = connectDb;