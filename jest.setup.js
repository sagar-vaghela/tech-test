/* eslint-disable */
// polyfill the fetch function
const fetchPolifill = require('whatwg-fetch');
global.fetch = fetchPolifill.fetch;

// polyfill for document.createRange
// this setup file t enable components as popper to work normally in test virtual dom.
if (global.document) {
  document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document
    }
  });
}
