const ScheduleModel = require("../models/classScheduleModel");
const { nullError,isEmptyId } = require("../utils/Errors");
const {updateClassesQuery} = require("../utils/db_query")

const getAllClasses = async (req, res) => {
  try {
    await ScheduleModel.find({}, (err, result) => {
    if (err) throw err;
    nullError(result, res);
  });      
  } catch (err) {
    res
    .status(500)
    .json({
        success: false,
        message: "failing",
        error: err.message
    })
  } 
};

const postClasses = async (req, res) => {
  try {
    await ScheduleModel.insertMany([req.body], (err, result) => {
      if (err) throw err;
      nullError(result, res);
    });
  } catch (err) {
    res
    .status(500)
    .json({
        success: false,
        message: "failing",
        error: err.message
    })
  }
};

const updateClassesName = async (req, res) => {
  const { className, spot, hours,hourId } = await req.body;
  try {
    const ArrayPath = `days.$.${hours}.$[object].${spot}`;
    const ArrayObject = {};
    ArrayObject[ArrayPath] = className;
   
    await ScheduleModel.findOneAndUpdate(
    updateClassesQuery(req),
      { $set: ArrayObject },
      {
        arrayFilters: [{ "object._id": { _id: hourId } }],
        upsert: true,
      },
      (err, result) => {
        if (err) throw err;
        nullError(result,res);
      }
    );
  } catch (err) {
    res
    .status(500)
    .json({
        success: false,
        message: "failing",
        error: err.message
    })
  }
};

const updateClasses = async (req, res) => {
  const { isTaken, spot, hours, hourId } = await req.body;
  try {
    const ArrayPath = `days.$.${hours}.$[object].${spot}`;
    const ArrayObject = {};
    ArrayObject[ArrayPath] = isTaken ? false : true;
    await ScheduleModel.findOneAndUpdate(
    updateClassesQuery(req),
      { $set: ArrayObject },
      {
        arrayFilters: [{ "object._id": { _id: hourId } }],
        upsert: true,
      },
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
        message: "failing",
        error: err.message
    })
  }
};

const deleteClasses = async (req, res) => {
  try {
    await ScheduleModel.findByIdAndDelete(req.body.id, (err, result) => {
      if (err) throw err;
      res
      .status(200)
      .json({
         success:true,
         message: "delete class success",
      });
    });
  } catch (err) {
    res
    .status(500)
    .json({
        success: false,
        message: "failing",
        error: err.message
    })
  }
};

module.exports = {
  getAllClasses,
  updateClasses,
  postClasses,
  deleteClasses,
  updateClassesName,
};
