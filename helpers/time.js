const Time = {
    oneHour:  1000*60*60, // in ms

    isWithinLastHour(date) {
        const now = new Date();
        if ((now - date) < oneHour) {
            return true;
        }
        return false;
    },
    
    timestamp() {
        return new Date();
    }
}

module.exports = Time;