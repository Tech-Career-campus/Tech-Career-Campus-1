const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController")

router.post('/', courseController.addNewCourse);
router.get('/', courseController.getAllCourses);
router.get('/getCourseByName', courseController.getCourseByName);

module.exports = router;