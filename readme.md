# chrome-manifest-cli [![Build Status](https://travis-ci.org/ragingwind/chrome-manifest-cli.svg?branch=master)](https://travis-ci.org/ragingwind/chrome-manifest-cli)

> My laudable module


## Install

```
$ npm install --save chrome-manifest-cli
```


## Usage

```js
const chromeManifestCli = require('chrome-manifest-cli');

chromeManifestCli('unicorns');
//=> 'unicorns & rainbows'
```


## API

### chromeManifestCli(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global chrome-manifest-cli
```

```
$ chrome-manifest-cli --help

  Usage
    chrome-manifest-cli [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ chrome-manifest-cli
    unicorns & rainbows
    $ chrome-manifest-cli ponies
    ponies & rainbows
```


## License

MIT © [ragingwind](http://ragingwind.me)
