module.exports = function (source) {
  const reg = /import\(([.|\s]*)\)/g;

  const content = source.replaceAll(reg, (...args) => {
    return `require(${args[1]})`;
  });

  return content;
};
