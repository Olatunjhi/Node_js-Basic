const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstname:{
        type: String,
        trim: true
    },
    secondName:{
        type: String,
        trim: true
    },
    lastName:{
        type: String,
        trim: true
    },
    age:{
        type: Number
    }
},{
    versionKey: false, //disables _v field
    timestamps: true   //enable updatedAt && createdAt
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;