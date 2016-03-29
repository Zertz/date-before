'use strict'

function isBefore (date, dateCompare) {
  var d = date instanceof Date ? date : new Date(date)
  var dc = dateCompare || new Date()

  dc = dc instanceof Date ? dc : new Date(dc)

  if (d + '' === 'Invalid Date' || dc + '' === 'Invalid Date') {
    return undefined
  }

  return d.valueOf() < dc.valueOf()
}

module.exports = isBefore
