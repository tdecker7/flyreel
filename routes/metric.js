const express = require('express');
const router = express.Router();
const { handlePost } = require('./post')

const storage = {}; 

router
    .get('/:key/sum', (req, res) => {
        const { key } = req.params;
        res.send(key);
    })

    .post('/:key', (req, res, next) => {
        req.storage = storage;
        next();
    }, handlePost)
module.exports = router;