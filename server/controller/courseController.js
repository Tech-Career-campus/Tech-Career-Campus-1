const CourseModel = require("../models/courseModel");
const StaffModel = require("../models/staffModel");

const addNewCourse = async (req, res) => {
  const staff = await StaffModel.findById(req.body.id);
  const { name, CourseInformation } = req.body;
  const newCourse = new CourseModel({
    name: name,
    CourseInformation: CourseInformation,
    coursesCreator: staff._id,
  });
  try {
    await newCourse.save();
    staff.courses.push(newCourse);
    await staff.save();
    res
      .status(201)
      .json({ message: "create new course success", data: newCourse });
  } catch (error) {
    res.status(409).json({ message: "create new course filed", error: error });
  }
};
const getAllCourses = async (req, res) => {
  try {
    await CourseModel.find({}, (err, result) => {
      if (err) throw err;
      res.status(200).json({ massage: "get course success!", data: result });
    });
  } catch (err) {
    res.status(500).json({ massage: "get course field", error: err });
  }
};
const getCourseByName = async (req, res) => {
  try {
    await CourseModel.find({ name: req.body.name }, (err, result) => {
      if (err) throw err;
      console.log(result);
      res
        .status(200)
        .json({ message: "get course by name success!", data: result });
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "get course by name field", error: err.message });
  }
};

// const updateCorse = async (req, res) => {
//   try {
//     const query = {
//       _id: req.body.courseId,
//       CourseInformation: {
//         $elemMatch: {
//           _id: req.body.courseInformationId,
//           topics: { $elemMatch: { _id: req.body.topicsId } },
//         },
//       },
//     };

    
//     console.log(req.body);
//     await CourseModel.findByIdAndUpdate(
//         req.body.courseId, 
//        { $set: { "CourseInformation.$[].topics.$[score].isDone": req.body.isDone } },
//        { arrayFilters: [   { "score": {_id: req.body.topicsId } } ], multi: true},
//       (err, result) => {
//         if (err) throw err;

//         if (result !== null) {
//           console.log(result.CourseInformation[0].topics[0]);
//           res
//             .status(200)
//             .json({ message: "update corse success!", data: result });
//         } else {
//           const errorNull = new Error("result is null");
//           res
//             .status(500)
//             .json({ message: "update course field", error: errorNull.message });
//         }
//       }
//     );
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "update course field", error: err });
//   }
// };

module.exports = {
  addNewCourse,
  getAllCourses,
  getCourseByName,
  // updateCorse,
};
