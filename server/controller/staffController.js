const StaffModel = require("../models/staffModel");
const { nullError } = require("../utils/nullError");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

const getAllStaff = async (req, res) => {
  try {
    await StaffModel.find({}, (err, result) => {
      nullError(result, res);
      if (err) throw err;
    });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "find staff filed",
        error: err
      });
  }
};
const getStaffById = async (req, res) => {
  try {
    await StaffModel.findById(req.params.id, (err, result) => {
      nullError(result, res);
      if (err) throw err;
    });
  } catch (err) {
    res
      .status(400)
      .json({
        success: false,
        message: "find by id staff filed",
        error: err
      });
  }
};

// const getStaffById = async (id) => {
//   try {
//     await StaffModel.findById(id, (err, result) => {
//       //  nullError(result , res);
//       if (err) throw err;
//     });
//     const staff = await StaffModel.findById(id);
//     return staff;
//   } catch (err) {
//     res
// .status(500)
//   .json({
//     success: false,
//     message: "find by id staff filed",
//     error: err
//   });
//   }
// };

const deleteStaffById = async (req, res) => {
  try {
    await StaffModel.findByIdAndDelete(req.body.id, (err, result) => {
      nullError(result, res);
      if (err) throw err;
    });
  } catch (err) {
    res
      .status(400)
      .json({
        success: false,
        message: "delete by id staff filed",
        error: err
      });
  }
};
const updateStaffById = async (req, res) => {
  try {
    await StaffModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
      (err, result) => {
        if (err) throw err;
        delete result.password
        const token = jwt.sign(result.toJSON(), SECRET_KEY, { expiresIn: "1d" });
        res
          .status(200)
          .json({
            success: true,
            message: "success",
            data: token
          });
      }
    );
  } catch (err) {
    res
      .status(400)
      .json({
        success: false,
        message: "update staff filed",
        error: err
      });
  }
};

module.exports = {
  getAllStaff,
  getStaffById,
  deleteStaffById,
  updateStaffById,
};
