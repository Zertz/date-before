# date-before [![Build Status](https://travis-ci.org/Zertz/date-before.svg?branch=master)](https://travis-ci.org/Zertz/date-before) [![NPM version](https://badge.fury.io/js/date-before.png)](http://badge.fury.io/js/date-before)

> Determine if a date is before another


## Install

```
$ npm install --save date-before
```


## Usage

```js
const isBefore = require('date-before')

isBefore(new Date(1988, 6, 29))
//=> true

isBefore(new Date(1988, 6, 29), new Date(1900, 1, 1))
//=> false

isBefore('unicorns')
//=> undefined
```


## API

### isBefore(date[, dateCompare])

#### date

Type: `date` or `something compatible with new Date()`

#### dateCompare

Type: `date` or `something compatible with new Date()`

Default: `new Date()`


## License

MIT © [Pier-Luc Gendreau](https://github.com/Zertz)
