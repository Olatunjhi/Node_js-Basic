const express = require('express');
const { registerStudent, findAllStudent, findStudentById,
     updateStudentById, deleteStudentById, findStudentByQuery } = require('./student.controller');
const router = express.Router();

router.post('/create-student', registerStudent);
router.get('/get-all-students', findAllStudent);
router.get('/get-student/:id', findStudentById);
router.put('/update-student/:id', updateStudentById);
router.delete('/delete-student/:id', deleteStudentById);
router.get('/search-student', findStudentByQuery);

module.exports = router;