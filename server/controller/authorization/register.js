const StaffModel = require("../../models/staffModel");
const StudentModel = require("../../models/studentModel");
const bcrypt = require("bcrypt");
const { model } = require("mongoose");
const SECRET_KEY = process.env.SECRET_KEY;
const validateRegisterInput = require("./registerValidator");

const register = async (req, res) => {
  if (req.body.role === "Staff") {

    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    await StaffModel.findOne({ email: req.body.email }, (err, staff) => {
      if (err) throw err;
      if (staff) {
        return res.status(400).json({ massage: "email already exists" });
      }
      bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          req.body.password = hash;
          StaffModel.insertMany(req.body, (err) => {
            if (err) {
              return res.status(400).json({
                success: false,
                message: "failed to create a staff",
                error: err,
              });
            }
            return res.status(201).json({
              success: true,
              message: "success to create a staff",
              error: err,
            });
          });
        });
      });
    });
  }

  if (req.body.role === "Student") {
    const { errors, isValid } = validateRegisterInput(req.body.student);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    await StudentModel.findOne({ email: req.body.email }, (err, staff) => {
      if (err) throw err;
      if (staff) {
        return res.status(400).json({ massage: "email already exists" });
      }
      bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          req.body.password = hash;
          StudentModel.insertMany(req.body.student, (err) => {
            if (err) {
              return res.status(400).json({
                success: false,
                message: "failed to create a student",
                err: err,
              });
            }
            return res.status(201).json({
              success: true,
              message: "success to create a student",
              err: err,
            });
          });
        });
      });
    });
  }
};

module.exports = register;
