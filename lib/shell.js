const pify = require('pify');
const jsdom = require('jsdom');

module.exports = require('./core')({
  env: pify(jsdom.env),
});
