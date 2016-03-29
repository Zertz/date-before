'use strict'

module.exports = function (date, dateCompare) {
  let d = date instanceof Date ? date : new Date(date)
  let dc = dateCompare || new Date()

  dc = dc instanceof Date ? dc : new Date(dc)

  if (d + '' === 'Invalid Date' || dc + '' === 'Invalid Date') {
    return undefined
  }

  return d.valueOf() < dc.valueOf()
}
