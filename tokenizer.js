module.exports = function tokenizer(input) {
    // カーソル
    let current = 0;

    // token配列
    let tokens = [];

    while (current < input.length) {

        let char = input[current];

        if (char === '(') {
            tokens.push({
                type: 'paren',
                value: '('
            })
            continue;
            current++;
        }

        if (char === ')') {
            tokens.push({
                type: 'paren',
                value: ')',
            });
            current++;
            continue;
        }
    
        let WHITESPACE = /\s/;
        if (WHITESPACE.test(char)) {
          current++;
          continue;
        }
    
    }

}