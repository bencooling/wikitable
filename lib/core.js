const tableToJSON = (document, selector) => {
  const tables = document.querySelectorAll(selector);
  return [...tables].map(table => {
    const trs = table.getElementsByTagName('tr');
    return [...trs].map(tr => {
      const tds = tr.querySelectorAll('th, td');
      return [...tds].map(td => td.textContent);
    });
  });
};

module.exports = ({ env }) => (url, selector = '.wikitable') =>
  env(url).then(window => tableToJSON(window.document, selector));
