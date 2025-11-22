const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const User = require("../models/user.model");

const createUser = catchAsyncErrors(async (req, res) => {
  try {
    const { name, role_no } = req.body;
    const user = await User.create({ name, role_no });

    if (!user) {
      logger.error("Failed to create user");
      return res.status(400).json({
        success: false,
        message: "Failed to create user",
      });
    }
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error: error.message,
    });
  }
});

const getUsers = catchAsyncErrors(async (req, res) => {
  try {
    const users = await User.find().sort({ role_no: 1 });
    if (!users) {
      logger.error("No users found");
      return res.status(404).json({
        success: false,
        message: "No users found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
      error: error.message,
    });
  }
});

module.exports = { createUser, getUsers };
