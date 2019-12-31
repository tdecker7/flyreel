const Post = {
    handlePost(req, res) {
        const { key } = req.params;
        console.log('key', key);
        console.log('req.body', req.body);
        
        res.send(req.body);
    }
};

module.exports = Post;