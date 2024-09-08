import db from "../config/db_connect.js";
import asyncHandler from "express-async-handler";
import handleError from "../utils/error_handler.js";
import generateToken from "../config/jwt_token.js";
import { isValidPhoneNumber } from "../utils/helper.js";
import mysql from "../utils/mysql.js";
import { ADMIN, USER } from "../utils/constants.js";

const login = asyncHandler(async (req, res) => {
  const { mobile_number } = req.body;

  try {
    if (!mobile_number) {
      return res.json({
        code: 400,
        status: false,
        message: "Mobile number is required",
      });
    }
    if (mobile_number && !isValidPhoneNumber(mobile_number)) {
      return res.json({
        code: 400,
        status: false,
        message: "Invalid mobile number format",
      });
    }

    // Check if the user exists
    let user = await db.user.findOne({
      where: { mobile_number: mobile_number },
    });

    if (!user) {
      // Create new user if not exist
      user = await db.user.create({ mobile_number });
    }

    const result = {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      mobile_number: user.mobile_number,
      role: user.role,
      address: user.address,
      profile_pic: user.profile_pic,
      token: generateToken(user.id, USER),
    };

    return res.json({
      code: 200,
      status: true,
      result: result,
      message: "Login Successful",
    });
  } catch (err) {
    handleError(err, res);
  }
});

const getUserDetails = asyncHandler(async (req, res) => {
  const { user_id } = req.params;
  const { role } = req.user;
  try {
    if (role == USER && user_id != req.user.id) {
      return res.status(403).json({
        code: 403,
        status: false,
        message: "You are not authorized to access this resource",
      });
    }
    const findUserById = await db.user.findOne({
      where: { id: user_id },
    });
    if (findUserById) {
      return res.json({
        code: 200,
        status: true,
        message: "User found successfully",
        result: findUserById,
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "User not found",
      });
    }
  } catch (err) {
    res
      .status(500)
      .json({ code: 500, status: false, message: "Internal Server Error" });
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const { role } = req.query;
    const findAllUser = await db.user.findAll({
      where: { role: role ? role : USER },
    });
    if (findAllUser) {
      return res.json({
        code: 200,
        status: true,
        message: "Users found successfully",
        result: findAllUser,
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "Users not found",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

const deleteUserDetails = asyncHandler(async (req, res) => {
  const { user_id } = req.params;
  try {
    const findUserById = await db.user.findOne({
      where: { id: user_id },
    });
    if (findUserById) {
      await findUserById.destroy();
      return res.json({
        code: 200,
        status: true,
        message: "User deleted successfully",
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "User not found",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

const updateUserDetails = asyncHandler(async (req, res) => {
  const { user_id } = req.params;
  const userRole = req.user.role;
  const userId = req.user.id;

  const updates = {};

  try {
    // Check if the user making the request is the same user whose data is being updated or if the user is an admin
    if (user_id != userId && userRole !== ADMIN) {
      return res.status(403).json({
        code: 403,
        status: false,
        message: "You are not authorized to update this user's data",
      });
    }

    const allowedParams =
      userRole === ADMIN
        ? Object.keys(req.body)
        : [
            "firstname",
            "lastname",
            "email",
            "dob",
            "gender",
            "about",
            "profile_pic",
            "address",
          ];

    // Filter req.body to only include allowed parameters
    Object.keys(req.body).forEach((key) => {
      if (allowedParams.includes(key)) {
        updates[key] = req.body[key];
      } else {
        return res.status(403).json({
          code: 403,
          status: false,
          message: "You are passing wrong parameters",
        });
      }
    });
    const findUserById = await db.user.findOne({
      where: { id: user_id },
    });
    if (findUserById) {
      await findUserById.update(updates);
      return res.json({
        code: 200,
        status: true,
        message: "User updated successfully",
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "User not found",
      });
    }
  } catch (err) {
    console.log("Error ===>", err);
    res
      .status(500)
      .json({ code: 500, status: false, message: "Internal Server Error" });
  }
});

export {
  login,
  getUserDetails,
  getAllUsers,
  deleteUserDetails,
  updateUserDetails,
};
