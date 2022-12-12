
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


  let one = document.querySelector('.one');
  let two = document.querySelector('.two');
  let three = document.querySelector('.three');
  let four = document.querySelector('.four');
  let five = document.querySelector('.five');
  let six = document.querySelector('.six');
  let seven = document.querySelector('.seven');
  let eight = document.querySelector('.eight');
  let nine = document.querySelector('.nine');
  let zero = document.querySelector('.zero');
  let plus = document.querySelector('.plus');
  let minus = document.querySelector('.minus');
  let times = document.querySelector('.times');
  let into = document.querySelector('.into');
  let equals = document.querySelector('.equals');
  let decimal = document.querySelector('.decimal');
  let clear = document.querySelector('.clear');
  let bSpace = document.querySelector('.backspace');

  let display = document.querySelector('.display');

  let numbers = [];
  let firstNumbers = []
  let operators = [];
  let nextNumbers = [];
  let testContainer = [];
  let decimals = [];
  let equalsCount = [];
 
  
function clickNumbers(number) {
  equalsCount = [];
  testContainer = [];

  if (operators.length === 0) {
    numbers.push(number);
    firstNumbers = numbers.join('');
    display.value = firstNumbers;
  
  } else if (operators.length > 0) {
    numbers.push(number);
    nextNumbers = numbers.join('');
    display.value = nextNumbers;
  };
  zero.removeAttribute('disabled', 'disabled');

};

one.addEventListener('click', ()=> {
  clickNumbers(1);
});

two.addEventListener('click', ()=> {
  clickNumbers(2);
});

three.addEventListener('click', ()=> {
  clickNumbers(3);
});

four.addEventListener('click', ()=> {
  clickNumbers(4);
});

five.addEventListener('click', ()=> {
  clickNumbers(5);
});

six.addEventListener('click', ()=> {
  clickNumbers(6);
});

seven.addEventListener('click', ()=> {
  clickNumbers(7);
});

eight.addEventListener('click', ()=> {
  clickNumbers(8);
});

nine.addEventListener('click', ()=> {
  clickNumbers(9);
});

zero.addEventListener('click', ()=> {
  clickNumbers(0);
  zero.setAttribute('disabled', 'disabled');
});

//this function tests for long decimal and rounds
function roundNumbers() {
  let testNumbers = (operate(Number(firstNumbers), operators[0], Number(nextNumbers))).toString();
      
  if ((testNumbers.length - testNumbers.indexOf('.')-1) > 7) {
    return display.value = Number(testNumbers).toFixed(7);
} else {
    return display.value = Number(testNumbers);
  } 
};

function clickOperators(operator) { 
operators = [];
testContainer = [];
console.log(testContainer.length);
console.log(operators.length);
  if (testContainer.length === 1 && operators.length === 0) {
        return;
      }
  numbers = [];  
  testContainer.push(operator);

  if (operators.length > 0) {     
    decimals = [];
    roundNumbers();
    operators = [];
    firstNumbers = display.value; 
    operators.push(operator);

  } else {
    operators.push(operator);
    decimals = [];
    numbers = [];
    
    
  };
  if (display.value === 'NaN' || display.value === 'undefined') {
    location.reload();
  }; 
  zero.removeAttribute('disabled', 'disabled');
};

plus.addEventListener('click', ()=> {
  clickOperators('+');
  
});

minus.addEventListener('click', ()=> {
  clickOperators('-');
});


times.addEventListener('click', ()=> {
  clickOperators('*');
});

into.addEventListener('click', ()=> {
  clickOperators('/');
});


equals.addEventListener('click', ()=> {
  equalsCount.push('=');
  if (equalsCount.length > 1) {
    return;
  }
  numbers = [];
  testNum = (operate(Number(firstNumbers), operators[0], Number(nextNumbers)));
    if (firstNumbers === '0' &&   operators[0] === '/' && nextNumbers === '0') {
    display.value = 'Computer says NO'
    operators = [];
    firstNumbers = display.value; 
    } else if (Number.isInteger(testNum)) {
    display.value = (operate(Number(firstNumbers), operators[0], Number(nextNumbers)));
    operators = [];
    firstNumbers = display.value;
    } else {
    display.value = (operate(Number(firstNumbers), operators[0], Number(nextNumbers)));
    operators = [];
    firstNumbers = display.value;    
        
    };
    if (display.value === 'NaN' || display.value === 'undefined') {
    display.value = 0;
  };
});


decimal.addEventListener('click', ()=> {
  decimals.push('.');
  if (decimals.length > 1) {
    return;
  }
  if (operators.length === 0) {
    numbers.push('.');
    firstNumbers = numbers.join('');
    display.value = firstNumbers;
  } else if (operators.length > 0) {
    if (nextNumbers.length === 0) {
      numbers.push('0.')
    } else {
      numbers.push('.');
    }
    nextNumbers = numbers.join('');
    display.value = nextNumbers;
  }
});

clear.addEventListener('click', ()=> {
  location.reload();
})
  
function backspace() {
  display.value = display.value.toString().slice(0, -1);
  numbers = [display.value];
  if (operators.length === 0) {
    firstNumbers = [display.value];
  } else {
    nextNumbers = [display.value];
  }
  
  return display.value;
};

bSpace.addEventListener('click', ()=> {
  if (display.value.length === 1) {
    location.reload();
  } else {
    backspace();
  };
});

