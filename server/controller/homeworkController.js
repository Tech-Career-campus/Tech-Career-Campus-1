const HomeworkModel = require("../models/homeworkModel");
const CourseModel = require("../models/courseModel");
const { nullError, isEmptyId } = require("../utils/Errors");

const creatNewHomework = async (req, res) => {
  try {
    isEmptyId(req.body.id);
    const { subject, description, id } = req.body;
    const course = await CourseModel.findById(id);
    const newHomework = new HomeworkModel({
      subject: subject,
      description: description,
      courseId: course._id,
    });
    await newHomework.save();
    course.homeworks.push(newHomework);
    await course.save();
    res
      .status(201)
      .json({
        success: true,
        message: "create new homework success",
        data: newHomework
      });
  } catch (err) {
    res
    res
<<<<<<< HEAD
    .status(400)
    .json({
      success:false,
      message: "delete by id homework filed",
      error: err.message 
    });
=======
      .status(400)
      .json({
        success: false,
        massage: "delete by id homework filed",
        error: err.message
      });
>>>>>>> 643042ffa68b69019a83628260629c5ffef2bd09
  }
};
const getHomeworkById = async (req, res) => {
  try {
    isEmptyId(req.params.id);
    await HomeworkModel.findOne({ courseId: req.params.id }, (err, result) => {
      if (err) throw err;
      nullError(result, res);
    });
  } catch (err) {
    res
<<<<<<< HEAD
    .status(500)
    .json({
       success:false,
       massage: "find homework filed",
       error: err.message 
    });
=======
      .status(500)
      .json({
        success: false,
        message: "find homework filed",
        error: err.message
      });
>>>>>>> 643042ffa68b69019a83628260629c5ffef2bd09
  }
};
const updateHomeworkById = async (req, res) => {
  try {
    isEmptyId(req.params.id);
    await HomeworkModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
      (err, result) => {
        if (err) throw err;
        nullError(result, res);
      }
    );
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "delete by id homework filed",
        error: err.message
      });
  }
};
const deleteHomeworkById = async (req, res) => {
  isEmptyId(req.params.id);
  try {
    const homework = await HomeworkModel.findByIdAndDelete(req.params.id, (err, result) => {
      if (err) throw err;
    });
    await CourseModel.findByIdAndUpdate(
      req.body.id,
      { $pull: { homeworks: homework._id } },
      (err, result) => {
        if (err) throw err;
        homework.remove({});
        res
<<<<<<< HEAD
        .status(200)
        .json({
           success:true,
           massage: "delete by id homework success!",
        });
=======
          .status(200)
          .json({
            success: true,
            message: "delete by id homework success!",
          });
>>>>>>> 643042ffa68b69019a83628260629c5ffef2bd09
      }
    );
  } catch (err) {
    res
      .status(500)
      .json({
<<<<<<< HEAD
         success:false,
         massage: "delete by id homework filed",
         error: err.message 
=======
        success: false,
        message: "delete by id homework filed",
        error: err.message
>>>>>>> 643042ffa68b69019a83628260629c5ffef2bd09
      });
  }
};

module.exports = {
  creatNewHomework,
  getHomeworkById,
  updateHomeworkById,
  deleteHomeworkById,
};
