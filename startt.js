'use strict';

const os = require('os'),
   _exec = require('child_process').exec;

function startt(process) {
    if(os.platform() === 'win32')
        _exec(`start ${process}`);
    else
        _exec(`xterm -e ${process}`);
}

module.exports = startt;
