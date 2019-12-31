const { assert } = require('chai')
const Time = require('../time');

describe('Time', () => {
    it('Has method isWithinLastHour which returns true if the date provided is within an hour', () => {
        const currentTime = new Date();
        const response = Time.isWithinLastHour(currentTime);
        assert.isBoolean(response, `Expected Boolean, got: ${response}`);
        assert.isTrue(response, `Expected True, got: ${response}`);
    });
    
    it('Has method isWithinLastHour which returns false if the date provided is NOT within an hour', () => {
        const lastYear = new Date(2018,01,01);
        const response = Time.isWithinLastHour(lastYear);
        assert.isBoolean(response, `Expected Boolean, got: ${response}`);
        assert.isFalse(response, `Expected False, got: ${response}`);
    });

    it('Has a method timestamp, which returns a current Date/Time object', () => {
        const timestamp = Time.timestamp();
        const isDate = (date) => { return date instanceof Date && !isNaN(date.valueOf()) }
        assert.isTrue(isDate(timestamp), `Expected True, got: ${isDate(timestamp)}`);

    });
})
