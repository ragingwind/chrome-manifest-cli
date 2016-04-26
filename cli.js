#!/usr/bin/env node
'use strict';
var meow = require('meow');
var chromeManifestCli = require('./');

var cli = meow([
	'Usage',
	'  $ chrome-manifest-cli [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ chrome-manifest-cli',
	'  unicorns & rainbows',
	'  $ chrome-manifest-cli ponies',
	'  ponies & rainbows'
]);

console.log(chromeManifestCli(cli.input[0] || 'unicorns'));
