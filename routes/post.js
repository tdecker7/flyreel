const Time = require('../helpers/time');

const Post = {
    /**
     * Handles POST requests. In memory strorage object is expected to be req.storage property.
     * @param {object} req Express request object - in memory storage is added as property
     * @param {object} res Express response object
     */
    handlePost(req, res) {
        const { key } = req.params;
        const logEntry = req.body;
        logEntry.timestamp = Time.timestamp();
        if(req.storage.hasOwnProperty(key)) {
            req.storage[key].push(logEntry);
        } else {
            req.storage[key] = [logEntry];
        } 
        console.log(`Added entry: ${JSON.stringify(logEntry)} to in-memory storage`);
        res.status(200).send({});
    }
};

module.exports = Post;