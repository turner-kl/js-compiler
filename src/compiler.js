const tokenizer = require("./tokenizer");
const parser = require("./parser");

module.exports = function compiler(input) {
  // 1. Lexical Analysis
  const tokens = tokenizer(input);

  // 2. Syntactic Analysis
  const ast = parser(tokens);

  return JSON.stringify(ast);
};
const a = {
  type: "Program",
  body: [
    {
      type: "CallExpression",
      name: "add",
      params: [
        { type: "NumberLiteral", value: "2" },
        {
          type: "CallExpression",
          name: "sub",
          params: [
            { type: "NumberLiteral", value: "4" },
            { type: "NumberLiteral", value: "3" },
          ],
        },
      ],
    },
  ],
};
