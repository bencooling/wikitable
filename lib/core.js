'use strict';

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var scrape = function scrape(document, selector) {
  var tables = document.querySelectorAll(selector);
  debugger;
  return [].concat(_toConsumableArray(tables)).map(function (table) {
    var trs = table.getElementsByTagName('tr');
    return [].concat(_toConsumableArray(trs)).map(function (tr) {
      var tds = tr.querySelectorAll('th, td');
      return [].concat(_toConsumableArray(tds)).map(function (td) {
        return td.textContent;
      });
    });
  });
};

var toObj = function toObj(tables) {
  return tables.map(function (table) {
    var _table = _toArray(table);

    var headers = _table[0];

    var rows = _table.slice(1);

    return rows.map(function (row) {
      return row.reduce(function (obj, td, i) {
        var key = headers[i];
        obj[key] = td;
        return obj;
      }, {});
    });
  });
};

var transform = function transform(format, data) {
  return format === 'array' ? data : toObj(data);
};

module.exports = function (_ref) {
  var env = _ref.env;
  var options = _ref.options;
  var url = options.url;
  var _options$selector = options.selector;
  var selector = _options$selector === undefined ? '.wikitable' : _options$selector;
  var _options$format = options.format;
  var format = _options$format === undefined ? 'object' : _options$format;

  return env(url).then(function (w) {
    return transform(format, scrape(w.document, selector));
  });
};