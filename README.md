[![Build Status](https://travis-ci.org/bencooling/wikitable.svg?branch=master)](https://travis-ci.org/bencooling/wikitable)
[![Coverage Status](https://coveralls.io/repos/github/bencooling/wikitable/badge.svg?branch=master)](https://coveralls.io/github/bencooling/wikitable?branch=master)

# wikitable

> HTML table scraper for wikipedia or any other site.  

- Lightweight, weighing in ~25 lines, 2 dependencies (pify & jsdom).  
- Requires es6.  


## 0.2.1 API Reference

### wikitable(options)

Scrape tables from wikipedia or any webpage, returning in a nested array or object (default) format.  

- options
  - `url` - Required url of the webpage to scrape
  - `selector` - Optional css selector, defaults to `.wikitable`
  - `format` - Optional format either `object` or `array`.

```javascript
// usage:
const url = 'https://en.wikipedia.org/wiki/List_of_modern_names_for_biblical_place_names';
wikitable({ url, format: 'array' })
  .then(data => console.log(data));
/*
  data:
  [ [ [ 'Biblical name', 'Mentioned in', 'Present name', ... ],
      [ 'Adramyttium', 'Acts 27:2', 'Burhaniye', ... ],
  ...
  ] ]
*/
```
