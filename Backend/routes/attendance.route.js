const express = require("express");
const {
  getAttendanceByDate,
  saveBulkAttendance,
} = require("../controllers/attendance.controller");

const router = express.Router();

router.get("/", getAttendanceByDate);
router.post("/bulk", saveBulkAttendance);

module.exports = router;
