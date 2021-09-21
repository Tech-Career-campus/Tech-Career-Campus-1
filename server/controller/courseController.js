const CourseModel = require("../models/courseModel");
const StaffModel = require("../models/staffModel");
const { collection } = require('../models/courseModel');

const addNewCourse = async (req, res) => {
  const staff = await StaffModel.findById(req.body.id);
  if (!staff) {
    res
      .status(400)
      .json({
        success: false,
        message: "staff not fond"
      });
  } else {
    const { name, CourseInformation, courseType } = req.body;
    const newCourse = new CourseModel({
      name: name,
      courseType: courseType,
      CourseInformation: CourseInformation,
      createBy: staff._id,
    });
    try {
      await newCourse.save();
      staff.courses.push(newCourse);
      await staff.save();
      res
        .status(201)
        .json({
          success: true,
          message: "create new course success",
          data: newCourse
        });
    } catch (err) {
      res
        .status(400)
        .json({
          success: false,
          message: "create new course filed",
          error: err
        });
    }
  }
};
const getAllCourses = async (req, res) => {
  try {
    await CourseModel.find({}, (err, result) => {
      if (err) throw err;
      res
        .status(200)
        .json({
          success: true,
          message: "get course success!",
          data: result
        });
    });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "get course field",
        error: err
      });
  }
};
const getCourseById = async (req, res) => {
  try {
    await CourseModel.findById(req.params.id, (err, result) => {
      if (err) throw err;
      res
        .status(200)
        .json({
          success: true,
          message: "get course by id success!",
          data: result
        });
    });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "get course by id field",
        error: err
      });
  }
};
const deleteSubSubject = async (req, res) => {
  try {
    const query = {
      _id: req.body.course_id,
      CourseInformation: {
        $elemMatch: {
          _id: req.body.courseInformationId,
        },
      },
    };
    const array = await req.body.array
    const ArrayPath = `CourseInformation.$[].${array}`
    const ArrayObject = {};
    ArrayObject[ArrayPath] = { _id: req.body.ElementId }
    await CourseModel.findOneAndUpdate(
      query,
      { $pull: ArrayObject },
      {
        new: true,
      },
      (err, result) => {
        if (err) throw err;
        if (result !== null) {
          res
            .status(200)
            .json({
              success: true,
              message: "Delete course success!",
              data: result
            });
        } else {
          const errorNull = new Error("result is null");
          res
            .status(400)
            .json({
              success: false,
              message: "Delete course failed",
              error: errorNull.message
            });
        }
      }
    );
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({
        success: false,
        message: "update course field",
        error: err
      });
  }

};
const addSubSubject = async (req, res) => {
  try {
    const query = {
      _id: req.body.course_id,
      CourseInformation: {
        $elemMatch: {
          _id: req.body.courseInformationId,
        },
      },
    };
    const array = await req.body.array
    const ArrayPath = `CourseInformation.$[].${array}`
    const ArrayObject = {};
    if (array === "topics") {
      ArrayObject[ArrayPath] = { isDone: req.body.isDone, subject: req.body.subject }

    }
    else if (array === "links") {
      ArrayObject[ArrayPath] = { tasks: req.body.tasks, Presentations: req.body.Presentations, StudyAid: req.body.StudyAid }
    }
    else {
      const arrayError = new Error("you need to choose which array links or topics")
      res
        .status(400)
        .json({
          success: false,
          message: "update course failed",
          error: arrayError.message
        })
      throw arrayError
      // מציג שגיאה וזורק שוב??
    }
    await CourseModel.findOneAndUpdate(
      query,
      { $addToSet: ArrayObject },
      {
        new: true,
      },
      (err, result) => {
        if (err) throw err;

        if (result !== null) {
          res
            .status(200)
            .json({
              success: true,
              message: "update corse success!",
              data: result
            });
        } else {
          const errorNull = new Error("result is null");
          res
            .status(400)
            .json({
              success: false,
              message: "update course field",
              error: errorNull.message
            });
        }
      }
    );
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({
        success: false,
        message: "update course field",
        error: err
      });
  }
};
const updateSubSubject = async (req, res) => {
  try {
    const array = await req.body.array
    const arrayField = await req.body.arrayField
    const ArrayPath = `CourseInformation.$.${array}.$[object].${arrayField}`
    const ArrayObject = {};
    ArrayObject[ArrayPath] = req.body.newValue
    const query = {
      _id: req.body._id,
      CourseInformation: {
        $elemMatch: {
          _id: req.body.courseInformationId,
        },
      },
    };
    await CourseModel.findOneAndUpdate(
      query,
      { $set: ArrayObject },
      {
        arrayFilters: [{ "object._id": { _id: req.body.array_id } }],
        upsert: true
      },
      (err, result) => {
        if (err) throw err;

        if (result !== null) {
          res
            .status(200)
            .json({
              success: true,
              message: "update corse success!",
              data: result
            });
        } else {
          const errorNull = new Error("result is null");
          res
            .status(400)
            .json({
              success: false,
              message: "update course field",
              error: errorNull.message
            });
        }
      }
    );
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({
        success: false,
        message: "update course field",
        error: err
      });
  }

};
const updateSubject = async (req, res) => {
  try {
    const field = await req.body.field
    if (field === "topics" || field === "links") {
      throw new Error("you cant update arrays only static fields")
    }
    const SubjectPath = `CourseInformation.$[object].${field}`
    const SubjectField = {}
    SubjectField[SubjectPath] = req.body.newValue
    await CourseModel.findOneAndUpdate(
      { _id: req.body._id },
      { $set: SubjectField },
      {
        arrayFilters: [{ "object._id": { _id: req.body.Subject_id } }],
        upsert: true
      },
      (err, result) => {
        if (err) throw err;

        if (result !== null) {
          res
            .status(200)
            .json({
              success: true,
              message: "update corse subject success!",
              data: result
            });
        } else {
          const errorNull = new Error("result is null");
          res
            .status(400)
            .json({
              success: false,
              message: "update course subject field",
              error: errorNull.message
            });
        }
      }
    );
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({
        success: false,
        message: "update course subject field",
        error: err
      });
  }

};
const searchCorseAutocomplete = async (req, res) => {
  try {
    let result = await collection.aggregate([
      {
        '$search': {
          'index': 'default',
          'text': {
            'query': `${req.query.term}`,
            'path': {
              'wildcard': '*'
            }
          }
        }
      }

    ]).toArray();
    res.send(result)
  } catch (err) {
    res
      .status(500)
      .json({
        success: true,
        message: "failed aggregate",
        error: err
      })
  }
};
const getStudentsByCourse = async (req, res) => {
  try {
    await CourseModel.findById(req.params.id)
      .populate('students')
      .then(course => {
        res
          .status(200)
          .json({
            success: true,
            message: 'The student is ',
            data: course.students.map((student) => student)
          })
      })
      .catch(err => {
        res
          .status(400)
          .json({
            success: false,
            message: 'error with population',
            error: err
          });
      })

  }
  catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "wrong",
        error: err
      })
  }
};
const deleteCourse = async (req, res) => {
  try {
    await CourseModel.findByIdAndDelete(req.params.id, (err, result) => {
      if (err) throw err
      res
        .status(200)
        .json({
          success: true,
          message: "success delete course",
          data: result
        })
    })
  }
  catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "delete course field",
        error: err
      });
  }
}

module.exports = {
  addNewCourse,
  getAllCourses,
  getCourseById,
  deleteSubSubject,
  addSubSubject,
  updateSubSubject,
  updateSubject,
  searchCorseAutocomplete,
  getStudentsByCourse,
  deleteCourse
};
