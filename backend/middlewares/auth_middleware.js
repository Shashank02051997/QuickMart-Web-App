import db from "../config/db_connect.js";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { ADMIN, USER } from "../utils/constants.js";

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (decoded.role === USER || decoded.role === ADMIN) {
        const user = await db.user.findOne({ where: { id: decoded.id } });
        if (user) {
          req.user = user;
          req.role = decoded.role;
          next();
        } else {
          return res.status(401).json({ message: "Not Authorized" });
        }
      } else {
        return res.status(401).json({ message: "Not Authorized" });
      }
    } catch (err) {
      return res
        .status(401)
        .json({ message: "Not Authorized token expired, Please Login again" });
    }
  } else {
    return res
      .status(401)
      .json({ message: "There is no token attached to header" });
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
  const { role } = req;
  const { mobile_number } = req.user;
  if (role === ADMIN) {
    const adminUser = await db.user.findOne({
      where: { mobile_number: mobile_number },
    });
    if (adminUser && adminUser.role === ADMIN) {
      next();
    } else {
      return res.status(401).json({ message: "User is not an admin" });
    }
  } else {
    return res.status(401).json({ message: "User is not an admin" });
  }
});

export { authMiddleware, isAdmin };
