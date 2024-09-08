import { DataTypes } from "sequelize";

const notification = (sequelize) => {
  const Notification = sequelize.define(
    "notification",
    {
      user_id: {
        // Foreign Key
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM("order", "promo", "alert", "general"),
        allowNull: true,
      },
      is_read: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
    }
  );

  return Notification;
};

export default notification;
