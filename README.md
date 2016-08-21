[![Build Status](https://travis-ci.org/bencooling/wikitable.svg?branch=master)](https://travis-ci.org/bencooling/wikitable)
[![Coverage Status](https://coveralls.io/repos/github/bencooling/wikitable/badge.svg?branch=master)](https://coveralls.io/github/bencooling/wikitable?branch=master)

# wikitable

> HTML table scraper for wikipedia or any other site.  

- lightweight (13 lines, 2 dependencies: pify & jsdom ).  
- Can optionally provide a css selector (defaults to the className used by wikipedia `.wikitable`).  
- Returns an array of nested arrays (Array of table cells within an array of table rows within an array of tables on site)

```javascript
// usage:
const url = 'https://en.wikipedia.org/wiki/List_of_modern_names_for_biblical_place_names';
wikitable(url, [selector])
  .then(data => console.log(data));
/*
  data:
  [ [ [ 'Biblical name', 'Mentioned in', 'Present name', ... ],
      [ 'Adramyttium', 'Acts 27:2', 'Burhaniye', ... ],
  ...
  ] ]
*/
```
