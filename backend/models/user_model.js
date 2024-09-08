import { DataTypes } from "sequelize";

const user = (sequelize) => {
  const User = sequelize.define(
    "user",
    {
      firstname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      mobile_number: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true,
      },
      role: {
        type: DataTypes.ENUM("user", "admin"),
        allowNull: false,
        defaultValue: "user",
      },
      dob: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      gender: {
        type: DataTypes.ENUM("male", "female", "other"),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      is_email_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_mobile_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_blocked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      about: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      profile_pic: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:
          "https://res.cloudinary.com/dt6hyafmc/image/upload/v1692392344/Avatars/avatar_8609.png",
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      firebase_token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      underscored: true,
    }
  );

  return User;
};

export default user;
