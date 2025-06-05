const mongoose = require('mongoose');

const connectDB = () => {
    try {
        mongoose.connect('mongodb://localhost:27017/studentFormApp');
        console.log('mongodb connected');
    } catch (error) {
        console.error('error connecting database:', error);
    } 
}

module.exports = connectDB;