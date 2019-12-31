const Time = {
    oneHour:  1000*60*60, // in ms

    /**
     * Returns true if the argument is within one hour of now, otherwise false
     * @param {Date} date Date/Time JavaScript object as timestamp
     * @returns {Boolean}
     */
    isWithinLastHour(date) {
        const now = new Date();
        if ((now - date) < this.oneHour) {
            return true;
        }
        return false;
    },
    
    /**
     * Returns new Date object from now
     */
    timestamp() {
        return new Date();
    }
}

module.exports = Time;