import { DataTypes } from "sequelize";

const avatar = (sequelize) => {
  const Avatar = sequelize.define(
    "avatar",
    {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      underscored: true,
    }
  );

  return Avatar;
};

export default avatar;
