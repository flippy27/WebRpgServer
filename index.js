require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

//parsing data
const bodyParser = require('body-parser');
app.use(express.json());

//routing
const usersRoutes = require('./routes/users');
app.use('/users',usersRoutes);

//server run
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});