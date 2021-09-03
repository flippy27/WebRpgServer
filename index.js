const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const uri = "mongodb+srv://Flippy:<password>@cluster0.vbzdm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

require('crypto').randomBytes(64).toString('hex')

async function main() {
    await mongoose.connect(uri);
}

function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err);
        if (err) return res.sendStatus(403);
        req.user = user
        next()
    })
}

app.post('/api/createNewUser', (req, res) => {
    const token = generateAccessToken({ username: req.body.username });
    res.json(token);
});

app.post('/login', function(req, res) {
    res.send('hello world');
});

app.listen(3000);