/**
 * Breaks the input code (string) into the basic syntax
 * of the language (array of objects)
 *
 * @param {string} input
 * @returns
 */
module.exports = function tokenizer(input) {
  // カーソル
  let current = 0;

  // token配列
  let tokens = [];

  while (current < input.length) {
    let char = input[current];

    // parenthesis
    if (char === "(") {
      tokens.push({
        type: "paren",
        value: "(",
      });
      current++;
      continue;
    }

    // parenthesis
    if (char === ")") {
      tokens.push({
        type: "paren",
        value: ")",
      });
      current++;
      continue;
    }

    // white space
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    // number
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {
      let value = "";
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      tokens.push({ type: "number", value });

      continue;
    }

    // string
    if (char === '"') {
      let value = "";
      char = input[++current];

      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      char = input[++current];
      tokens.push({ type: "string", value });

      continue;
    }

    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = "";
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      tokens.push({ type: "name", value });

      continue;
    }

    throw new TypeError("I dont know what this character is: " + char);
  }

  return tokens;
};
