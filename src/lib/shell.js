const pify = require('pify');
const jsdom = require('jsdom');

module.exports = options => require('./core')({
  env: pify(jsdom.env),
  options,
});
