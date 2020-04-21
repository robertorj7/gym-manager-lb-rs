const { Pool } = require('pg');

module.exports = new Pool({
    user: 'postgres',
    password: 'Postgres@2020',
    host: 'localhost',
    port: 5432,
    database: 'db_gymmanager'
});