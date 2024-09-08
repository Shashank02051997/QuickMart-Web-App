import { DataTypes } from "sequelize";

const orderItem = (sequelize) => {
  const OrderItem = sequelize.define(
    "order_item",
    {
      order_id: {
        // Foreign Key
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_id: {
        // Foreign Key
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
    }
  );

  return OrderItem;
};

export default orderItem;
