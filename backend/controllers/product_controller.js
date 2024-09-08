import db from "../config/db_connect.js";
import asyncHandler from "express-async-handler";
import handleError from "../utils/error_handler.js";

const createProduct = asyncHandler(async (req, res) => {
  const { name } = req.body;
  try {
    const findProductByName = await db.product.findOne({
      where: { name: name },
    });
    if (findProductByName) {
      return res.json({
        code: 404,
        status: false,
        message: "Product name already exists",
      });
    }
    if (!findProductByName) {
      const result = await db.product.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        image_url: req.body.image_url,
        category_id: req.body.category_id,
      });
      if (result) {
        return res.json({
          code: 200,
          status: true,
          message: "Product created successfully",
          result: result,
        });
      } else {
        return res.json({
          code: 404,
          status: false,
          message: "Product not created",
        });
      }
    }
  } catch (err) {
    handleError(err, res);
  }
});

const getAllProducts = asyncHandler(async (req, res) => {
  try {
    const findAllProducts = await db.product.findAll();
    if (findAllProducts) {
      return res.json({
        code: 200,
        status: true,
        message: "Products found successfully",
        result: findAllProducts,
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "Products not found",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

const getSpecificProduct = asyncHandler(async (req, res) => {
  const { product_id } = req.params;
  try {
    const findProductById = await db.product.findOne({
      where: { id: product_id },
    });
    if (findProductById) {
      return res.json({
        code: 200,
        status: true,
        message: "Product found successfully",
        result: findProductById,
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "Product not found",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

const deleteSpecificProduct = asyncHandler(async (req, res) => {
  const { product_id } = req.params;
  try {
    const findProductById = await db.product.findOne({
      where: { id: product_id },
    });
    if (findProductById) {
      await findProductById.destroy();
      return res.json({
        code: 200,
        status: true,
        message: "Product deleted successfully",
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "Product not found",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  const { product_id } = req.params;
  try {
    // Check if product with the same name already exists
    const existingProduct = await db.product.findOne({
      where: { name: req.body.name },
    });

    if (existingProduct && existingProduct.id !== product_id) {
      return res.json({
        code: 409,
        status: false,
        message: "Product name already exists",
      });
    }

    const findProductById = await db.product.findOne({
      where: { id: product_id },
    });
    if (findProductById) {
      await findProductById.update(req.body);
      return res.json({
        code: 200,
        status: true,
        message: "Product updated successfully",
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "Product not found",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

export {
  createProduct,
  getAllProducts,
  getSpecificProduct,
  deleteSpecificProduct,
  updateProduct,
};
