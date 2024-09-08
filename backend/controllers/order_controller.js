import db from "../config/db_connect.js";
import asyncHandler from "express-async-handler";
import handleError from "../utils/error_handler.js";
import executeQuery from "../utils/mysql.js";

const getAllOrdersOfUser = asyncHandler(async (req, res) => {
  try {
    const ordersSql = `SELECT * FROM orders`;
    const ordersResult = await executeQuery(ordersSql);
    if (ordersResult.length > 0) {
      return res.json({
        code: 200,
        status: true,
        message: "Orders found successfully",
        result: ordersResult,
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "Orders not found",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

const createOrder = asyncHandler(async (req, res) => {
  const { total_amount } = req.body;
  try {
    const result = await db.order.create({
      user_id: req.user.id,
      total_amount: total_amount,
    });
    if (result) {
      return res.json({
        code: 200,
        status: true,
        message: "Order created successfully",
        result: result,
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "Order not created",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

const createOrderItems = asyncHandler(async (req, res) => {
  const { order_id } = req.params;
  const orderItems = req.body.order_items; // Expecting an array of order items

  try {
    // Add the order_id to each order item
    const itemsWithOrderId = orderItems.map((item) => ({
      ...item,
      order_id: order_id,
    }));

    // Use bulkCreate to insert multiple records at once
    const results = await db.orderItem.bulkCreate(itemsWithOrderId);

    if (results.length > 0) {
      return res.json({
        code: 200,
        status: true,
        message: "Order items created successfully",
        results: results,
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "Order items not created",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

export { getAllOrdersOfUser, createOrder, createOrderItems };
