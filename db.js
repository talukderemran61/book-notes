import pg from 'pg';

const db = new pg.Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres1234@localhost:5432/booknotes',

    // user: process.env.DB_USER || 'postgres',
    // host: process.env.DB_HOST || 'localhost', 
    // database: process.env.DB_NAME || 'booknotes',
    // password: process.env.DB_PASSWORD || 'postgres1234',
    // port: process.env.DB_PORT || '5432',
});

db.connect();

export default db;