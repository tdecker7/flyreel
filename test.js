const { spawn } = require('child_process');

const testFiles = [];

spawn(`./node_modules/.bin/mocha ${testFiles} --exit`);