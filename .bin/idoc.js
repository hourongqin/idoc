#!/usr/bin/env node

var commander = require('commander');
var appInfo = require('../package');
var idoc  = require('..')
require('colorful').toxic()


commander
  .version(appInfo.version)
  .option('init','init a documentation')
  .option('publish','publish documentation for public')
  .parse(process.argv);

if (!process.argv[2]) {
    commander.help();
    console.log();
}

commander.parse(process.argv);

idoc(commander)