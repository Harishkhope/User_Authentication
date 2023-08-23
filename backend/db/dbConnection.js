const mongoose = require('mongoose');
const connectDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydatabase');
        console.log("Successfully Connected!");
    }
    catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;