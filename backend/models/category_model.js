import { DataTypes } from "sequelize";

const category = (sequelize) => {
  const Category = sequelize.define(
    "category",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
    }
  );

  return Category;
};

export default category;
