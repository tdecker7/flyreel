const Time = require('../helpers/time');

const Get = {
    handleGet(req, res) {
        const { key } = req.params;
        if (!req.storage.hasOwnProperty(key)) {
            res.status(404).send({ 
                error: `resource ${key} was not found in log entries` 
            });
        }

        const { metrics } = req.storage[key];
        let sum = 0;
        metrics.forEach(metric => {
            console.log('metric', metric);
        });
        res.status(200).send(sum);
    }

}

module.exports = Get;