const Time = require('../helpers/time');

/**
 * Filters out metrics that are considered "old", or not within an hour old
 * @param {array} metricsArray Array of objects containing metrics and timestamps
 */
function removeOldEntries(metricsArray) {
    return metricsArray.filter(metric => Time.isWithinLastHour(metric.timestamp));
}

const Get = {
    /**
     * Handles GET requests. In memory strorage object is expected to be req.storage property.
     * @param {object} req Express request object
     * @param {object} res Express response object
     */
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