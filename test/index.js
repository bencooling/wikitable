// dependencies
const { test } = require('tap');
const wikitable = require('./../lib');

// webpage used in many sub tests
const url = 'https://en.wikipedia.org/wiki/List_of_modern_names_for_biblical_place_names';
// shorthand
const type = data => Object.prototype.toString.call(data);

test('Returns wikipedia table', t =>
  wikitable({ url, format: 'array' })
    .then(data => {
      // 1st table header of 1st table row of 1st table
      t.strictSame(data[0][0][0], 'Biblical name');
      t.end();
    }));

test('format array returns data formatted as an array', t =>
  wikitable({ url, format: 'array' })
    .then(data => {
      t.strictSame(type(data), '[object Array]');
      t.end();
    }));

test('default format, object returns data formatted as an object', t =>
  wikitable({ url })
    .then(data => {
      t.strictSame(type(data[0][0]), '[object Object]');
      t.end();
    }));

// TODO: Add test for custom url and selector
