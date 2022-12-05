
function add(num1, num2) {
  return (num1 + num2);
};

function subtract(num1, num2) {
  return (num1 - num2);
};

function multiply(num1, num2) {
  return (num1 * num2);
};

function divide(num1, num2) {
  return (num1/num2);
}

function operate(a, b, c) {
  switch (b) {
    case '+':
      return add(a, c);
    case '-':
      return subtract(a, c);
    case '*':
      return multiply(a, c);
    case '/':
      return divide(a, c);   
  };
};

console.log(operate(6, '+', 3));










