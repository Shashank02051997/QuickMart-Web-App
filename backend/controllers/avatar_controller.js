import db from "../config/db_connect.js";
import asyncHandler from "express-async-handler";
import handleError from "../utils/error_handler.js";

const getAllAvatars = asyncHandler(async (req, res) => {
  try {
    const findAllAvatar = await db.avatar.findAll();
    if (findAllAvatar) {
      return res.json({
        code: 200,
        status: true,
        message: "Avatars found successfully",
        result: findAllAvatar,
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "Avatars not found",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

export { getAllAvatars };
