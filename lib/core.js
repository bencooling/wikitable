const scrape = (document, selector) => {
  const tables = document.querySelectorAll(selector);
  return [...tables].map(table => {
    const trs = table.getElementsByTagName('tr');
    return [...trs].map(tr => {
      const tds = tr.querySelectorAll('th, td');
      return [...tds].map(td => td.textContent);
    });
  });
};

const toObj = tables => tables.map(table => {
  const [headers, ...rows] = table;
  return rows.map(row => row.reduce((obj, td, i) => {
    const key = headers[i];
    obj[key] = td;
    return obj;
  }, {}));
});

const transform = (format, data) => (format === 'array') ? data : toObj(data);

module.exports = ({ env, options }) => {
  const { url, selector = '.wikitable', format = 'object' } = options;
  return env(url).then(w => transform(format, scrape(w.document, selector)));
};
