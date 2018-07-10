const os = require('os');
const shell = require('shelljs');

/*
 * This script serves as setup and run for the Express Server.
 */

console.log('Building Angular Apps')
shell.cd('matt-green')
console.log('Building matt-green now.........................')
shell.exec('ng build --base-href /matt-green/ --aot', function (code, stdout, stderr) {
    shell.cd('../rpdr-fl')
    console.log('Building rpdr-fl now............................')
    shell.exec('ng build --base-href /rpdr-fl/ --aot', function (code, stdout, stderr) {
        shell.cd('..')
        shell.exec('node app.js')
    });
});

