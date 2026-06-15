const mysql = require("mysql2");

// ✅ Use POOL instead of single connection (VERY IMPORTANT for Vercel)
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ✅ Convert to promise-based API (clean + stable)
module.exports = db.promise();