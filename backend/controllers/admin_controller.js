import db from "../config/db_connect.js";
import asyncHandler from "express-async-handler";
import handleError from "../utils/error_handler.js";
import { isValidPhoneNumber } from "../utils/helper.js";
import generateToken from "../config/jwt_token.js";
import { ADMIN, USER } from "../utils/constants.js";

const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    // Validate mobile format
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

    if (user) {
      if (user.role === "admin") {
        const result = {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          mobile_number: user.mobile_number,
          profile_pic: user.profile_pic,
          token: generateToken(user.id, ADMIN),
        };
        res.json({
          code: 200,
          status: true,
          message: "Login successfully",
          result: result,
        });
      } else {
        res.json({ code: 404, status: false, message: "Login as Admin" });
      }
    } else {
      res.json({ code: 404, status: false, message: "User not found" });
    }
  } catch (err) {
    handleError(err, res);
  }
});

export { adminLogin };
