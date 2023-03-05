const number1 = parseInt(process.argv[2]);
const operation = process.argv[3];
const number2 = parseInt(process.argv[4]);

let result = null;

switch (operation) {
    case '+': result = number1+number2;
        break;
    case '-': result = number1-number2;
        break;
    case '/': result = number1/number2;
        break;
    case '*': result = number1 * number2;
    break;
}

console.log("result =",result);