import db from "../config/db_connect.js";
import asyncHandler from "express-async-handler";
import handleError from "../utils/error_handler.js";
import executeQuery from "../utils/mysql.js";

const getAllProductsOfCategory = asyncHandler(async (req, res) => {
  const { cat_id } = req.params;
  try {
    const productsSql = `SELECT * FROM products WHERE category_id = ${cat_id}`;
    const productsResult = await executeQuery(productsSql);
    if (productsResult.length > 0) {
      return res.json({
        code: 200,
        status: true,
        message: "Products found successfully",
        result: productsResult,
      });
    } else {
      return res.status(404).json({
        code: 404,
        message: "Products not found",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

const getSpecificProductOfCategory = asyncHandler(async (req, res) => {
  const { cat_id, product_id } = req.params;
  try {
    const productSql = `SELECT * FROM products WHERE category_id = ${cat_id} and id = ${product_id}`;
    const productResult = await executeQuery(productSql);
    if (productResult.length > 0) {
      return res.json({
        code: 200,
        status: true,
        message: "Product found successfully",
        result: productResult,
      });
    } else {
      return res.status(404).json({
        code: 404,
        message: "Product not found",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

export { getAllProductsOfCategory, getSpecificProductOfCategory };
