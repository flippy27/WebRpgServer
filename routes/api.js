const jwt = require('jsonwebtoken');


const express = require('express');
const apiRoutes = express.Router();
const shortid = require('shortid');
const chalk = require('chalk');
const mysql = require('mysql');
const { database } = require('../keys');


const conn = mysql.createConnection(database);
conn.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('DB connected');
    }
});

apiRoutes.get('/getAllUsers', (req, res) => {
    console.log('asdkjakso');
    conn.query(`SELECT * from user`, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

module.exports = apiRoutes;