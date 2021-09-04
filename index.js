require('dotenv').config();

const express = require('express');
const cors = require('cors')
const app = express();
const jwt = require('jsonwebtoken');
const routes = require('./routes/routes')
app.use(cors());
//parsing data
const bodyParser = require('body-parser');
app.use(express.json());
//routing
app.use('/',routes);

//server run
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});