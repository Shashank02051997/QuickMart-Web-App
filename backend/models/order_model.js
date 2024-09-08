import { DataTypes } from "sequelize";

const order = (sequelize) => {
  const Order = sequelize.define(
    "order",
    {
      user_id: {
        // Foreign Key
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("pending", "delivered"),
        allowNull: false,
        defaultValue: "pending",
      },
      total_amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
    }
  );

  return Order;
};

export default order;
