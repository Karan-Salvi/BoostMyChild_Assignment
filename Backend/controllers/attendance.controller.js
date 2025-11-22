const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Attendance = require("../models/attendance.model");

const getAttendanceByDate = catchAsyncErrors(async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ message: "Date is required" });
    }

    const records = await Attendance.find({ date }).populate(
      "userId",
      "name role_no"
    );

    let present = 0;
    let absent = 0;
    let leave = 0;

    records.forEach((rec) => {
      if (rec.status === "present") present++;
      else if (rec.status === "absent") absent++;
      else if (rec.status === "leave") leave++;
    });

    res.json({
      success: true,
      date,
      summary: {
        present,
        absent,
        leave,
        formatted: `P: ${present} / A: ${absent} / L: ${leave}`,
      },
      records,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const saveBulkAttendance = catchAsyncErrors(async (req, res) => {
  try {
    const { date, records } = req.body;

    if (!date || !records)
      return res.status(400).json({ message: "Date & records required" });

    const bulkOps = records.map((r) => ({
      updateOne: {
        filter: { userId: r.userId, date },
        update: {
          userId: r.userId,
          date,
          status: r.status,
          remark: r.remark,
        },
        upsert: true,
      },
    }));

    await Attendance.bulkWrite(bulkOps);

    res.json({ message: "Attendance updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = { getAttendanceByDate, saveBulkAttendance };
