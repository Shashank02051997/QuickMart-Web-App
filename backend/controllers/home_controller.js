import db from "../config/db_connect.js";
import asyncHandler from "express-async-handler";
import handleError from "../utils/error_handler.js";
import executeQuery from "../utils/mysql.js";

const getHomeDetail = asyncHandler(async (req, res) => {
  try {
    const exclusiveOfferSql = `SELECT * FROM products WHERE discount_price !=0 ORDER BY RAND() LIMIT 10`;
    const exclusiveOfferResult = await executeQuery(exclusiveOfferSql);

    const bestSellingSql = `SELECT * FROM products ORDER BY RAND() LIMIT 10`;
    const bestSellingResult = await executeQuery(bestSellingSql);

    const categoriesSql = `SELECT * FROM categories`;
    const categoriesResult = await executeQuery(categoriesSql);

    const allProductsSql = `SELECT * FROM products`;
    const allProductsResult = await executeQuery(allProductsSql);

    return res.json({
      code: 200,
      status: true,
      message: "Home details found successfully",
      result: {
        exclusive_offers: exclusiveOfferResult,
        best_sellings: bestSellingResult,
        categories: categoriesResult,
        all_products: allProductsResult,
      },
    });
  } catch (err) {
    handleError(err, res);
  }
});

export { getHomeDetail };
