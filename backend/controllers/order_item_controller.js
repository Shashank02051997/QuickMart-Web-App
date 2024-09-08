import db from "../config/db_connect.js";
import asyncHandler from "express-async-handler";
import handleError from "../utils/error_handler.js";
import executeQuery from "../utils/mysql.js";

const getAllOrderItemsOfUser = asyncHandler(async (req, res) => {
  const { order_id } = req.params;
  const userId = req.user.id;
  try {
    const orderItemsSql = `SELECT oi.order_id, oi.product_id, oi.quantity as order_item_quantity_count, p.name, p.image_url, p.final_price, p.quantity, p.category_id, p.is_best_selling , o.* FROM order_items as oi left join products as p on oi.product_id = p.id left join orders as o on oi.order_id = o.id WHERE oi.order_id = ${order_id} and o.user_id = ${userId}`;
    const orderItemsResult = await executeQuery(orderItemsSql);
    if (orderItemsResult.length > 0) {
      return res.json({
        code: 200,
        status: true,
        message: "All order items found successfully",
        result: orderItemsResult,
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "Order items not found",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

export { getAllOrderItemsOfUser };
