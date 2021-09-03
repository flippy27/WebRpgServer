require('dotenv').config();


module.exports = {
    database: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: '',
        database: process.env.DB_NAME || 'WebRpgDB',
    }
};