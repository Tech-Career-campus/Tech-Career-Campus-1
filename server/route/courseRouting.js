const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController");
const {authRole} = require('../controller/authentication/auth');

router.post('/',authRole("Staff"), courseController.addNewCourse);
router.get('/',authRole("Staff"), courseController.getAllCourses);
router.get('/getCourseByName', courseController.getCourseByName);

module.exports = router;