const Post = {
    handlePost(req, res) {
        const { key } = req.params;
        const logEntry = req.body;
        logEntry.timestamp = new Date(); 
        if(req.storage.hasOwnProperty(key)) {
            req.storage[key].push(logEntry);
        } else {
            req.storage[key] = [logEntry];
        }
        console.log(`Added entry: ${log} to in-memory storage`);
        res.status(200).send({});
    }
};

module.exports = Post;