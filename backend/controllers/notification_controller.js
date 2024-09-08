import db from "../config/db_connect.js";
import asyncHandler from "express-async-handler";
import handleError from "../utils/error_handler.js";

const getAllNotifications = asyncHandler(async (req, res) => {
  try {
    const findAllNotification = await db.notification.findAll();
    if (findAllNotification) {
      return res.json({
        code: 200,
        status: true,
        message: "Notifications found successfully",
        result: findAllNotification,
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "Notifications not found",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

export { getAllNotifications };
