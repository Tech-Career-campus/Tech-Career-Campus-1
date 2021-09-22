const StaffModel = require("../models/staffModel");
const CourseModel = require("../models/courseModel");
const { nullError , isEmptyId } = require("../utils/Errors");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

const getAllStaff = async (req, res) => {
  try {
    await StaffModel.find({}, (err, result) => {
      nullError(result, res);
      if (err) throw err;
    });
  } catch (err) {
    res.status(500).json({ massage: "find staff filed", data: error });
  }
};
const getStaffById = async (req, res) => {
  try {
    await StaffModel.findById(req.params.id, (err, result) => {
       nullError(result , res);
       if (err) throw err;
    });
  } catch (error) {
    res.status(500).json({ massage: "find by id staff filed", data: error });
  }
};
const deleteStaffById = async (req, res) => {
  try {
    await StaffModel.findByIdAndDelete(req.body.id,(err, result) => {
        if (err) throw err;
        res.status(200).json({ massage: "delete by id student success!" });
      }
    );
  } catch (err) {
    console.log(error);
    res
      .status(500)
      .json({ massage: "delete by id student filed", data: err.message });
  }
};
const updateStaffById = async (req, res) => {
  try {
     await StaffModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body},
      { new: true },
      (err, result) => {
        delete result.password
        const token = jwt.sign(result.toJSON(), SECRET_KEY, { expiresIn: "1d" });
        res.status(200).json({ message: "success", data: result, result: token });
        if (err) throw err;
      }
    );
  } catch (error) {
    res.status(500).json({ massage: "update staff filed", data: error });
  }
};

module.exports = {
  getAllStaff,
  getStaffById,
  deleteStaffById,
  updateStaffById,
};
