module.exports = function toCamel(pascal) {
  let upper = pascal.match(/^[A-Z]+/);
  upper = upper ? upper[0].slice(0, upper[0].length > 1 ? upper[0].length - 1 : upper.length) : '';
  return upper.toLowerCase() + pascal.slice(upper.length);
};
