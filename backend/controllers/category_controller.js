import db from "../config/db_connect.js";
import asyncHandler from "express-async-handler";
import handleError from "../utils/error_handler.js";

const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  try {
    const findCategoryByName = await db.category.findOne({
      where: { name: name },
    });
    if (findCategoryByName) {
      return res.json({
        code: 404,
        status: false,
        message: "Category name already exists",
      });
    }
    if (!findCategoryByName) {
      const result = await db.category.create({
        name: req.body.name,
        description: req.body.description,
      });
      if (result) {
        return res.json({
          code: 200,
          status: true,
          message: "Category created successfully",
          result: result,
        });
      } else {
        return res.json({
          code: 404,
          status: false,
          message: "Category not created",
        });
      }
    }
  } catch (err) {
    handleError(err, res);
  }
});

const getAllCategories = asyncHandler(async (req, res) => {
  try {
    const findAllCategory = await db.category.findAll();
    if (findAllCategory) {
      return res.json({
        code: 200,
        status: true,
        message: "Categories found successfully",
        result: findAllCategory,
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "Categories not found",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

const getSpecificCategory = asyncHandler(async (req, res) => {
  const { cat_id } = req.params;
  try {
    const findCategoryById = await db.category.findOne({
      where: { id: cat_id },
    });
    if (findCategoryById) {
      return res.json({
        code: 200,
        status: true,
        message: "Category found successfully",
        result: findCategoryById,
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "Category not found",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

const deleteSpecificCategory = asyncHandler(async (req, res) => {
  const { cat_id } = req.params;
  try {
    const findCategoryById = await db.category.findOne({
      where: { id: cat_id },
    });
    if (findCategoryById) {
      await findCategoryById.destroy();
      return res.json({
        code: 200,
        status: true,
        message: "Category deleted successfully",
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "Category not found",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

const updateCategory = asyncHandler(async (req, res) => {
  const { cat_id } = req.params;
  try {
    // Check if category with the same name already exists
    const existingCategory = await db.category.findOne({
      where: { name: req.body.name },
    });

    if (existingCategory && existingCategory.id !== cat_id) {
      return res.json({
        code: 409,
        status: false,
        message: "Category name already exists",
      });
    }

    const findCategoryById = await db.category.findOne({
      where: { id: cat_id },
    });
    if (findCategoryById) {
      await findCategoryById.update(req.body);
      return res.json({
        code: 200,
        status: true,
        message: "Category updated successfully",
      });
    } else {
      return res.json({
        code: 404,
        status: false,
        message: "Category not found",
      });
    }
  } catch (err) {
    handleError(err, res);
  }
});

export {
  createCategory,
  getAllCategories,
  getSpecificCategory,
  deleteSpecificCategory,
  updateCategory,
};
