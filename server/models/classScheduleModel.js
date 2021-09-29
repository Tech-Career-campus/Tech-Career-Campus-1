const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema(
  {
    days: {
      type: [
        {
          hours: [
            {
              hour: {
                type: String,
                required: true
              },
              className: {
                type: String,
                required: true
              },
              isTaken: {
                type: Boolean,
                required: true,
                default: false
              },
            }
          ],
        }
      ],
    },
  },
  { timestamps: true }
);

const Schedule = mongoose.model("schedule", scheduleSchema);
module.exports = Schedule;
