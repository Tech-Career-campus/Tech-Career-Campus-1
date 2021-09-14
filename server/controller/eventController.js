const eventModel = require("../models/eventModel");
const staffModel = require("../models/staffModel");
const { ObjectId } = require("mongodb");

const getAllEventPost = async (req, res) => {
  try {
    await eventModel.find({}, (error, result) => {
      if (error) throw error;
      res.status(200).json({ massage: "get event post success", data: result });
    });
  } catch (err) {
    res.status(500).json({ massage: "get event post field", error: err });
  }
};

const getEventById = async (req, res) => {
  try {
    await eventModel.findById(req.params.id, (error, result) => {
      if (error) throw error;
      res
        .status(200)
        .json({ massage: "get event by id success", data: result });
    });
  } catch (error) {
    res.status(500).json({ massage: "get event by id field  ", error: error });
  }
};

const postNewEvent = async (req, res) => {
  const staff = await staffModel.findById(req.params.id);
  const { eventName, massage } = req.body;
  const newevent = new eventModel({
    eventName: eventName,
    massage: massage,
  });
  try {
    await newevent.save();
    staff.events.push(newevent);
    await staff.save();
    res.status(200).json({
      massage: "post added successfully, success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({ massage: "post added field ", error: err });
  }
};

const deleteEventPost = async (req, res) => {
  try {
    await eventModel.findByIdAndDelete(req.params.id, (error, result) => {
      if (error) throw error;
      res.status(200).json({ massage: "deleted event success", data: result });
    });
  } catch (error) {
    res.status(500).json({ massage: "deleted event field", error: error });
  }
};

const updateEventPost = async (req, res) => {
  try {
    await eventModel.findByIdAndUpdate(req.params.id,
      { $set: req.body },
      (error, result) => {
        if (error) throw error;
        res.status(200).json({ massage: "update event success", data: result });
      }
    );
  } catch (error) {
    res.status(500).json({ massage: "update event field", error: error });
  }
};
module.exports = {
  getAllEventPost,
  getEventById,
  postNewEvent,
  deleteEventPost,
  updateEventPost,
};
