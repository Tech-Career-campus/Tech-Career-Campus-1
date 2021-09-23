const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homework = new Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default:"",
    },
    expireAt: {
      type: Date,
      required: true,
      default: Date.now,
      index: { expires: "90d" },
    },
    courseId: { type: Schema.Types.ObjectId, ref: "course" },
  },
  { timestamps: true }
);

const Homework = mongoose.model("homework", homework);
module.exports = Homework;
