const express = require('express');
const router = express.Router();
const { handlePost } = require('./post')
const { handleGet } = require('./get');

const storage = {}; 

router
    .get('/:key/sum', (req, res, next) => {
        req.storage = storage;
        next();
    }, handleGet)

    .post('/:key', (req, res, next) => {
        req.storage = storage;
        next();
    }, handlePost)
module.exports = router;