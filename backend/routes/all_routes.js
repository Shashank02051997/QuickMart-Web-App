import adminRouter from "./admin_routes.js";
import userAuthRouter from "./user_auth_routes.js";
import userRouter from "./user_routes.js";
import categoryRouter from "./category_routes.js";
import categoryProductRouter from "./category_product_routes.js";
import productRouter from "./product_routes.js";
import notificationRouter from "./notification_routes.js";
import cartRouter from "./cart_routes.js";
import orderRouter from "./order_routes.js";
import orderItemRouter from "./order_item_routes.js";
import homeRouter from "./home_routes.js";
import avatarRouter from "./avatar_routes.js";

const setupRoutes = (app) => {
  app.use("/api/admin", adminRouter);
  app.use("/api/auth/user", userAuthRouter);
  app.use("/api/users", userRouter);
  app.use("/api/categories", categoryRouter);
  app.use("/api/categories/:cat_id/products", categoryProductRouter);
  app.use("/api/products", productRouter);
  app.use("/api/notifications", notificationRouter);
  app.use("/api/carts", cartRouter);
  app.use("/api/orders", orderRouter);
  app.use("/api/orders/:order_id/items", orderItemRouter);
  app.use("/api/home", homeRouter);
  app.use("/api/avatars", avatarRouter);
};

export default setupRoutes;
