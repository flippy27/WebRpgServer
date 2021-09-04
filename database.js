const mysql = require('mysql');
require('dotenv').config();

let database = {
    host: process.env.DB_HOST ,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}
const conn = mysql.createConnection(database);

conn.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('DB connected');
    }
});
module.exports = conn; 