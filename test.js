import test from 'ava'
import isBefore from './'

test('unicorns', (t) => {
  t.is(isBefore('unicorns'), undefined)
})

test('more unicorns', (t) => {
  t.is(isBefore('unicorns', 'unicorns'), undefined)
})

test('new Date(1988, 6, 29), unicorns', (t) => {
  t.is(isBefore(new Date(1988, 6, 29), 'unicorns'), undefined)
})

test('unicorns, new Date(1988, 6, 29)', (t) => {
  t.is(isBefore('unicorns', new Date(1988, 6, 29)), undefined)
})

test('"1988"', (t) => {
  t.is(isBefore('1988'), true)
})

test('586152000000', (t) => {
  t.is(isBefore(586152000000), true)
})

test('new Date(1988, 6, 29).valueOf()', (t) => {
  t.is(isBefore(new Date(1988, 6, 29).valueOf()), true)
})

test('new Date(1988, 6, 29)', (t) => {
  t.is(isBefore(new Date(1988, 6, 29)), true)
})

test('new Date(2188, 6, 29)', (t) => {
  t.is(isBefore(new Date(2188, 6)), false)
})

test('new Date(1900, 1, 1), new Date(1988, 6, 29)', (t) => {
  t.is(isBefore(new Date(1900, 1, 1), new Date(1988, 6, 29)), true)
})

test('new Date(1988, 6, 29), new Date(1900, 1, 1)', (t) => {
  t.is(isBefore(new Date(1988, 6, 29), new Date(1900, 1, 1)), false)
})
