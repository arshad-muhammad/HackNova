import mysql from 'mysql2/promise';

let poolConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'hacknova',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// Properly parse port if provided
if (process.env.DB_PORT) {
    poolConfig.port = parseInt(process.env.DB_PORT, 10);
}

// Remote DBs (like PlanetScale, Aiven, TiDB) heavily used in Vercel require SSL mappings.
if (process.env.NODE_ENV === 'production' && process.env.DB_HOST !== 'localhost') {
    poolConfig.ssl = {
        rejectUnauthorized: false
    };
}

// Ensure the pool is only instantiated once explicitly.
const pool = mysql.createPool(poolConfig);

export default pool;
