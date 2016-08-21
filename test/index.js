const { test } = require('tap');
const wikitable = require('./../lib');

const url = 'https://en.wikipedia.org/wiki/List_of_modern_names_for_biblical_place_names';

test('Returns wikipedia table', t => {
  wikitable(url)
    .then(data => {
      // 1st table header of 1st table row of 1st table
      t.strictSame(data[0][0][0], 'Biblical name');
      t.end();
    });
});
