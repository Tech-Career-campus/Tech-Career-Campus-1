const express = require("express");
const router = express.Router();

const isToken = require("../controller//authorization/isToken")
const studentController = require("../controller/studentController")
const {authRole} = require('../controller/authentication/auth');



router.get('/', studentController.getStudents);
router.get('/getStudent/:id', studentController.getStudent);
router.get('/gradesById/:id', studentController.getStudentGradeById);
router.post('/addTestById', authRole("Staff"), studentController.addStudentTestById);
router.put('/updateTest/:_id', authRole("Staff"), studentController.updateStudentTestById);
router.put('/updateStudent', authRole("Staff"), studentController.updateStudent);
router.delete('/deleteTest/:_id', authRole("Staff"), studentController.deleteStudentTestById);
router.delete('/deleteStudent', authRole("Staff"), studentController.deleteStudent);
router.get('/syllabus',studentController.getSyllabusByCourse)

module.exports = router;