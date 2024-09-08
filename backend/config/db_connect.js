import dotenv from "dotenv";
dotenv.config();

import Sequelize from "sequelize";

import avatar from "../models/avatar_model.js";
import category from "../models/category_model.js";
import notification from "../models/notification_model.js";
import order from "../models/order_model.js";
import orderItem from "../models/order_item_model.js";
import product from "../models/product_model.js";
import user from "../models/user_model.js";

var sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    dialectOptions: {
      timezone: "+05:30", // for reading the data
    },
    timezone: "+05:30", // for writing the data
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Define models/tables
db.avatar = avatar(sequelize);
db.category = category(sequelize);
db.notification = notification(sequelize);
db.order = order(sequelize);
db.orderItem = orderItem(sequelize);
db.product = product(sequelize);
db.user = user(sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

export default db;
