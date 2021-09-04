const express = require('express');
const router = express.Router();
const conn = require('../database');

router.post('/', async(req, res) => {
    conn.query(`
    SELECT *
    FROM player p 
    JOIN class c ON p.class = c.class_id
    JOIN sub_class sc ON p.sub_class = sc.sub_class_id
    WHERE p.user_id = ?`,[req.body.user_id], (err, result) => {
        if (err) return res.send(err);
        res.send(result[0]);
    });
});

router.post('/calculatedDamage', async(req, res) => {
    console.log(req.body.player_id);
    conn.query(`
    SELECT p.base_damage
    FROM player p 
    WHERE p.id = ?`,[req.body.player_id], (err, result) => {
        if (err) return res.send(err);
        res.send(result);
    });
});
router.post('/equipment', async(req, res) => {
    console.log(req.body.player_id);
    conn.query(`
    SELECT p.base_damage
    FROM player p 
    WHERE p.id = ?`,[req.body.player_id], (err, result) => {
        if (err) return res.send(err);
        res.send(result);
    });
});



module.exports = router;