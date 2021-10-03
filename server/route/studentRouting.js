const express = require("express");
const router = express.Router();
const ADMIN = process.env.ADMIN;
const studentController = require("../controller/studentController");
const {checkPassword,changePassword} = require('../controller/authorization/changePassword')
const {authRole} = require('../controller/authentication/auth');

const upload = require('../middleware/upload');

router.get('/', studentController.getStudents);
router.get('/getStudent/:id', studentController.getStudent);
router.get('/gradesById/:id', studentController.getStudentGradeById);
router.post('/addTestById', authRole(ADMIN), studentController.addStudentTestById);
router.put('/updateTest/:_id', authRole(ADMIN), studentController.updateStudentTestById);
router.put('/updateStudent/:id', upload.single('profileImg'), studentController.updateStudent);
router.delete('/deleteTest/:_id', authRole(ADMIN), studentController.deleteStudentTestById);
router.delete('/deleteStudent/:id', authRole(ADMIN), studentController.deleteStudent);
router.get('/syllabus',studentController.getSyllabusByCourse);
router.put('/changePassword',checkPassword,changePassword);

module.exports = router;