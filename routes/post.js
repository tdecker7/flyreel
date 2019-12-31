const Post = {
    handlePost(req, res) {
        const { key } = req.params;
        console.log('key', key);
        console.log('req.body', req.body);
        console.log('stroage', req.storage);
        if(req.storage.hasOwnProperty(key)) {
            console.log('req.storage[key]', req.storage[key])
            req.storage[key].push(req.body);
            console.log('req.storage[key]', req.storage[key])
        } else {
            req.storage[key] = [req.body];
        }
        
        res.send(req.body);
    }
};

module.exports = Post;