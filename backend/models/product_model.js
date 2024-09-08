import { DataTypes } from "sequelize";

const product = (sequelize) => {
  const Product = sequelize.define(
    "product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      quantity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shelf_life: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      manufacturer: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      disclaimer: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      actual_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      discount_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      final_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      category_id: {
        // Foreign Key
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_best_selling: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
    }
  );

  return Product;
};

export default product;
