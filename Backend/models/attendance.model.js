const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: { type: String, required: true },
    status: {
      type: String,
      enum: ["present", "absent", "leave"],
      required: true,
    },
    remark: { type: String, default: "" },
  },
  { timestamps: true }
);

const attendanceIndex = { userId: 1, date: 1 };
attendanceSchema.index(attendanceIndex, { unique: true });

const Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports = Attendance;
