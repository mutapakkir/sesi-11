const mySql = require('mysql2')
require('dotenv').config()

const pool = mySql.createPool({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password :process.env.DB_PASS,
    database :process.env.DB_NAME,
    port : process.env.DB_PORT

})
const poolPromise = pool.promise()

module.exports = poolPromise