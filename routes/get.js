const Time = require('../helpers/time');

function removeOldEntries(metricsArray) {
    return metricsArray.filter(metric => Time.isWithinLastHour(metric.timestamp));
}

const Get = {
    handleGet(req, res) {
        const { key } = req.params;
        if (!req.storage.hasOwnProperty(key)) {
            res.status(404).send({ 
                error: `resource ${key} was not found in log entries` 
            });
        }

        // remove old entries before attempting any summations. 
        req.storage[key] = removeOldEntries(req.storage[key]);
        const metrics = req.storage[key];
        let sum = 0;
        sum = metrics.reduce((sum, currentMetric) => sum += currentMetric.value, 0);
        res.status(200).send({ value: sum });
    }

}

module.exports = Get;