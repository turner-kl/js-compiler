const tokenizer = require("./tokenizer");

module.exports = function compiler(input) {
  // 1. Lexical Analysis
  const tokens = tokenizer(input);

  return tokens;
};
