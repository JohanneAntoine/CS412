const parseEquation = str => [parseInt(str.substring(0,1)), parseInt(str.substring(str.length-1))];

const evaluate = str => {
    const left = parseEquation(str)[0];
    const right = parseEquation(str)[1];
    const operator = str.charAt(1);
    //console.log(`left: ${left}, right: ${right}, operator: ${operator}`);
    switch (operator) {
        case '+':
            return (operator) => left + right;
            break;
        case '-':
            return (operator) => left - right;
            break;
        case '*':
            return (operator) => left * right;
            break;
        case '/':
            return (operator) => left / right;
            break;
        case '%':
            return (operator) => left % right;
            break;
        case '^':
            return (operator) => Math.pow(left, right);
            break;

    }
}

const expression = '2^8';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)