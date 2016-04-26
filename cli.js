#!/usr/bin/env node
'use strict';
const meow = require('meow');
const cm = require('chrome-manifest');
const decamelizeKeys = require('decamelize-keys');

const cli = meow([`
  Usage
    $ chrome-manifest command target <options>

	Commands
		create: create manifest.json by following target types, app or [ext|extension]
		add: add following properties to exist manifest.json with template
		remove: remove following properties from exist manifest.json

  Options
		--manifest: path of manifest.json to write or read
    --channel: [stable|dev|beta|trunk]

  Examples
    $ chrome-manifest-cl,
    unicorns & rainbow,
    $ chrome-manifest-cli ponie,
    ponies & rainbow
`]);

const flags = decamelizeKeys(cli.flags, '_');

console.log(chromeManifestCli(cli.input[0] || 'unicorns'));
