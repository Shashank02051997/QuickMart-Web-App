import db from "../config/db_connect.js";
import asyncHandler from "express-async-handler";
import handleError from "../utils/error_handler.js";
import executeQuery from "../utils/mysql.js";

const getAllCartItemsOfUser = asyncHandler(async (req, res) => {
  try {
    const userId = req.user.id;
    const cartItemsSql = `SELECT * FROM carts WHERE id = ${userId}`;
    const cartItemsResult = await executeQuery(cartItemsSql);
    if (cartItemsResult.length > 0) {
      return res.json({
        code: 200,
        status: true,
        message: "Cart items found successfully",
        result: cartItemsResult,
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "Cart items not found",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

export { getAllCartItemsOfUser };
