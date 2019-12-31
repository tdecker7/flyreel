const express = require('express');
const router = express.Router();
const { handlePost } = require('./post')
const { handleGet } = require('./get');

// opted for simple in-memory object storage over file writes
const storage = {}; 

router
    .get('/:key/sum', (req, res, next) => {
        // would not be needed with DB integration
        req.storage = storage;
        next();
    }, handleGet)

    .post('/:key', (req, res, next) => {
        // would not be needed with DB integration
        req.storage = storage;
        next();
    }, handlePost)
module.exports = router;