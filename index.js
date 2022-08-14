const loderUtils = require('loader-utils');
module.exports = function (source) {
  const reg = /import\(([.|\s]*)\)/g;
  const options = loderUtils.getOptions(this);
  const content = source.replaceAll(reg, (...args) => {
    return `require(${args[1]})`;
  });

  return content;
};
