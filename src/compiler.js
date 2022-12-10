const tokenizer = require("./tokenizer");
const parser = require("./parser");
const traverser = require("./traverser");
const transformer = require("./transformer");

module.exports = function compiler(input) {
  // 1. Lexical Analysis
  const tokens = tokenizer(input);

  // 2. Syntactic Analysis
  const ast = parser(tokens);

  return JSON.stringify(ast);
};
