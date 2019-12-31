const Time = require('../helpers/time');

const Post = {
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