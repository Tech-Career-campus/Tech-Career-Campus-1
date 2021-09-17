const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController");
const {authRole} = require('../controller/authentication/auth');


router.get('/',authRole("Staff"), courseController.getAllCourses);
router.post('/addNewCourse', authRole("Staff"), courseController.addNewCourse);
router.get('/search',authRole("Staff"), courseController.searchCorseAutocomplete);
router.get('/getCourseById/:id', courseController.getCourseById);
router.delete('/deleteSubSubject', authRole("Staff"), courseController.deleteSubSubject);
router.post('/addSubSubject', authRole("Staff"), courseController.addSubSubject);
router.put('/updateSubSubject', authRole("Staff"), courseController.updateSubSubject);
router.put('/updateSubject', authRole("Staff"), courseController.updateSubject);
router.get('/students/:id',authRole("Staff"),courseController.getStudentsByCourse)

module.exports = router;