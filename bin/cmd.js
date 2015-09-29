#!/usr/bin/env node
/*
 * -h, --help
 * -v, --version
 * -s, --string
 * path
 * desPath
 */

var program = require('commander');
var doWalk = require('../index');
 
program
  .version(require('../package.json').version)
  .option('-p, --path [oriPath]', 'transform path', 'default')
  .option('-e, --extension [extension name]', 'jade|json|js', '')
  .parse(process.argv);

if (program.path){
    var tempPath = program.path == 'default' ? '' ? program.path;
    doWalk(tempPath, program.extension);   
}