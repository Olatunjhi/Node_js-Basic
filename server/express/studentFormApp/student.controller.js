const Student = require('./student.schema');

const registerStudent = async (req,res) => {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({message: 'new student created', student}); 
}

const findAllStudent = async (req,res) => {
    const students = await Student.find();
    res.status(200).json({message: 'all student are: ', students, length: students.length});
}

const findStudentById = async (req,res) => {
    const {id} = req.params;
    const student = await Student.findById(id);
    res.status(200).json({message: 'student you looking for is:', student});
}

const updateStudentById = async (req,res) => {
    const {id} = req.params;
    const studentUpdated = await Student.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json({message: 'your update successful', studentUpdated});
}

const deleteStudentById = async (req,res) => {
    const {id} = req.params;
    const deleteStudent = await Student.findByIdAndDelete(id);
    res.status(200).json({message: 'delete successfully', deleteStudent});
}

const findStudentByQuery = async (req,res) => {
    const {firstName} = req.query;
    const findStudent = await Student.find({firstname: firstName});
    res.status(200).json({message: 'Student you are looking for is:', findStudent});
}

module.exports = {
    registerStudent, findAllStudent, findStudentById, updateStudentById, deleteStudentById, findStudentByQuery
}