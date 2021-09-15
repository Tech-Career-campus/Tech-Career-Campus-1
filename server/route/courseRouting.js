const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController");
const {authRole} = require('../controller/authentication/auth');


router.get('/',authRole("Staff"), courseController.getAllCourses);
router.get('/search',authRole("Staff"), courseController.searchCorseAutocomplete);
router.post('/getCourseByName', courseController.getCourseByName);
router.post('/',authRole("Staff"), courseController.addNewCourse);
router.post('/addSubSubject', authRole("Staff"), courseController.addSubSubject);
router.put('/updateSubSubject', authRole("Staff"), courseController.updateSubSubject);
router.put('/updateSubject', authRole("Staff"), courseController.updateSubject);
router.delete('/deleteSubSubject', authRole("Staff"), courseController.deleteSubSubject);

module.exports = router;