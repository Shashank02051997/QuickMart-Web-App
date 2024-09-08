import mysql from "mysql2";

// Create a pool of database connections
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const executeQuery = async (sql, params = []) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (error, results) => {
      if (error) {
        console.log("Error =====>", error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

export default executeQuery;
