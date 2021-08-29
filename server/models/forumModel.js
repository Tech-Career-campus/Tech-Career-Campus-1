const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forumSchema = new Schema(
  {
    message: {
      type: String,
      required:true
    },
    expireAt: {
      type: Date,
      required: true,
      default: Date.now,
      index: { expires: '90d' }
    },
    authorByStudent: { type: Schema.Types.ObjectId, ref: "student" },
    authorByStaff: { type: Schema.Types.ObjectId, ref: "staff" },
  },
  { timestamps: true },

);

const Forum = mongoose.model("forum", forumSchema);
module.exports = Forum;
