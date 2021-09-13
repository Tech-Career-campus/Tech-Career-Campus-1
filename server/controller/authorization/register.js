const StaffModel = require("../../models/staffModel");
const StudentModel = require("../../models/studentModel");
const CourseModel = require("../../models/courseModel");
const bcrypt = require("bcrypt");
const validateRegisterInput = require("./registerValidator");
const courseModel =require('../../models/courseModel')
const register = async (req, res) => {
  if (req.body.registeredAs === "Staff") {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
      return res.status(401).json(errors);
    }

    await StaffModel.findOne({ email: req.body.email }, (err, staff) => {
      if (err) throw err;
      if (staff) {
        return res.status(401).json({ massage: "email already exists" });
      }

      //Password Encryption Before That it enters to the database
      bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(req.body.password, salt, async (err, hash) => {
          if (err) throw err;
          req.body.password = hash;

          const { firstName, lastName, age, email, phone } = req.body;
          const newStaff = new StaffModel({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: req.body.password,
            age: age,
          });
          try {
            await newStaff.save();
            res
              .status(201)
              .json({
                success: true,
                message: "create new staff success",
                data: newStaff,
              });
          } catch (error) {
            res
              .status(401)
              .json({
                success: false,
                message: "create new staff filed",
                error: error,
              });
          }
        });
      });
    });
  }

  if (req.body.registeredAs === "Student") {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    await StudentModel.findOne({ email: req.body.email }, (err, student) => {
      if (err) throw err;
      if (student) {
        return res.status(400).json({ errors: { email: "email already exists"} });
      }
      //Password Encryption Before That it enters to the database
      bcrypt.genSalt(12, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(req.body.password, salt, async (err, hash) => {
          if (err) throw err;
          req.body.password = hash;

          const course = await courseModel.findById(req.body.id);
          if (!course) {
            res
              .status(400)
              .json({
                success: false,
                message: "find course filed",
                error: "this is an error",
              });
          }

          const { firstName, lastName, age, email, courseName, phone } = req.body;
          const course = await CourseModel.findById(req.body.idCourse)
          const newStudent = new StudentModel({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: req.body.password,
            age: age,
            courseName: courseName,
            courseId: course._id,
          });
          try {
            await newStudent.save();
            course.students.push(newStudent);
            await course.save();
            res
              .status(201)
              .json({
                success: true,
                message: "create new student success",
                data: newStudent,
              });
          } catch (error) {
            res
              .status(400)
              .json({
                success: false,
                message: "create new student filed",
                error: error,
              });
          }
        });
      });
    });
  }
};

module.exports = register;