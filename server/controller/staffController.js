const StaffModel = require("../models/staffModel");
const CourseModel = require("../models/courseModel");
const { nullError , isEmptyId } = require("../utils/Errors");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const path = require('path');

const getAllStaff = async (req, res) => {
  try {
    await StaffModel.find({}, (err, result) => {
      if (err) throw err;
      nullError(result, res);
    });
  } catch (err) {
    res.status(500).json({ message: "find staff filed", data: err.message });
  }
};

const getStaffById = async (req, res) => {
  try {
    isEmptyId(req);
    await StaffModel.findById(req.params.id, (err, result) => {
       if (err) throw err; 
       nullError(result , res);
    });
  } catch (err) {
    res.status(500).json({ message: "find by id staff filed", error: err.message });
  }
};

const deleteStaffById = async (req, res) => {
  try {
    isEmptyId(req);
    await StaffModel.findByIdAndDelete(req.body.id,(err, result) => {
        if (err) throw err;
        res.status(200).json({ message: "delete by id student success!" });
      }
    );
  } catch (err) {
    res
      .status(500)
      .json({ message: "delete by id student filed", data: err.message });
  }
};

const updateStaffById = async (req, res) => {
  try {
<<<<<<< HEAD
    isEmptyId(req);
=======
    if (req.file) {
      profileImg = req.file.filename;
      console.log(profileImg);
    }
>>>>>>> 9dcf18b8a4b271facff2253f69a052692e5e54fe
     await StaffModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body, profileImg},
      { new: true },
      (err, result) => {
        delete result.password
        const token = jwt.sign(result.toJSON(), SECRET_KEY, { expiresIn: "1d" });
        res.status(200).json({ message: "success", data: result, result: token });
        if (err) throw err;
      }
    );
  } catch (err) {
    res.status(500).json({ massage: "update staff filed", error: err.message });
  }
};

module.exports = {
  getAllStaff,
  getStaffById,
  deleteStaffById,
  updateStaffById,
};
