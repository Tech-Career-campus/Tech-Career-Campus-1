const eventModel = require("../models/eventModel");
const staffModel = require("../models/staffModel");
const {nullError} = require("../utils/nullError")

const getAllEventPost = async (req, res) => {
  try {
    await eventModel.find({}, (err, result) => {
      if (err) throw err;
      res
        .status(200)
        .json({
          success: true,
          message: "get event post success",
          data: result
        });
    });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "get event post field",
        error: err
      });
  }
};

const getEventById = async (req, res) => {
  try {
    await eventModel.findById(req.params.id, (err, result) => {
      if (err) throw err;
      res
        .status(200)
        .json({
          success: true,
          message: "get event by id success",
          data: result
        });
    });
  } catch (err) {
    res
      .status(400)
      .json({
        success: false,
        message: "get event by id field",
        error: err
      });
  }
};

const postNewEvent = async (req, res) => {
  const staff = await staffModel.findById(req.params.id);
  const { eventName, message } = req.body;
  const newEvent = new eventModel({
    eventName: eventName,
    message: message,
    createBy:staff._id
  });
  try {
    await newEvent.save();
    staff.events.push(newEvent);
    await staff.save();
    res
      .status(201)
      .json({
        success: true,
        message: "post added successfully, success",
        data: newEvent,
      });
  } catch (err) {
    res
      .status(400)
      .json({
        success: false,
        message: "post added field ",
        error: err
      });
  }
};

const deleteEventPost = async (req, res) => {
  try {
    await eventModel.findByIdAndRemove(req.params.id, (err, result) => {
      nullError(result, res);
      if (err) throw err;

    });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "deleted event field",
        error: err
      });
  }
};

const updateEventPost = async (req, res) => {
  try {
    await eventModel.findByIdAndUpdate(req.params.id,
      { $set: req.body },
      (err, result) => {
        nullError(result , res);
        if (err) throw err;
      }
    );
  } catch (err) {
    res
      .status(400)
      .json({
        success: false,
        message: "update event field",
        error: err
      });
  }
};
module.exports = {
  getAllEventPost,
  getEventById,
  postNewEvent,
  deleteEventPost,
  updateEventPost,
};
