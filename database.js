const mysql = require('mysql');
const { database } = require('./keys');

const conn = mysql.createConnection(database);

conn.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('DB connected');
    }
});
module.exports = { variableName: conn };