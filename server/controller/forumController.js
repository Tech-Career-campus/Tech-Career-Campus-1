const ForumModel = require("../models/forumModel");
const StaffModel = require("../models/staffModel");
const StudentModel = require("../models/studentModel");


const messagesByStaff = async (req, res) => {
  const staff = await StaffModel.findById(req.body.id);
  const newMessages = new ForumModel({
    message: req.body.message,
    authorByStaff: staff._id,
  });
  try {
    await newMessages.save();
    staff.messages.push(newMessages);
    await staff.save();
    res
      .status(201)
      .json({ message: "create new message success", data: newMessages.message });
  } catch (error) {
    res.status(500).json({ message: "create new message filed", error: error });
  }
};

const messagesByStudent = async (req, res) => {
  const student = await StudentModel.findById(req.body.id);
  if(!student){
   return res.status(500).json({ message: "student not fond", error: error });
  }
  const newMessages = new ForumModel({
    message: req.body.message,
    authorByStudent: student._id
  });
  try {
    await newMessages.save();
    student.messages.push(newMessages);
    await student.save();
    res.status(201).json({ message: "create new message success", data: newMessages});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "create new message filed", error: error });
  }
};
const getAllMessages = async (req, res) => {
    try {
          await ForumModel.find({}, (err, result) => {
            if (err) console.log(err);
            res.json({ massage: "success", data: result })
        })
    } catch (err) {
        res.json({ massage: "problem in database", error: err });
    }
}

const deleteMessage = async (req, res) => {
    try {
        await ForumModel.findByIdAndDelete(req.params.id, (err, result) => {
            if (err) throw err;
            res.json({ massage: "delete message success", data:result})
        })

    }
    catch (err) {
        res.json({ massage: "problem with update", error: err });

    }
}

module.exports = {
  messagesByStaff,
  messagesByStudent,
  getAllMessages,
  deleteMessage
};
