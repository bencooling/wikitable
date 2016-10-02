'use strict';

var pify = require('pify');
var jsdom = require('jsdom');

module.exports = function (options) {
  return require('./core')({
    env: pify(jsdom.env),
    options: options
  });
};