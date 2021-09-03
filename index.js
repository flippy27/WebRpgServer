require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/route_index');


const PORT = process.env.PORT || 5678;

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log(router);
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});