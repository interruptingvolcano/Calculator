
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


  let display = document.querySelector('.display');

let numbers = [];
let firstNumbers = []
let operators = [];
let nextNumbers = [];


one.addEventListener('click', ()=> {
  if (operators.length === 0) {
    numbers.push(1);
    firstNumbers = numbers.join('');
    display.value = firstNumbers;
    //this is the number before the first operator, need to change it to a number in operation
  } else if (operators.length > 0) {
    numbers.push(1);
    nextNumbers = numbers.join('');
    display.value = nextNumbers;
  }
});

two.addEventListener('click', ()=> {
  if (operators.length === 0) {
    numbers.push(2);
    firstNumbers = numbers.join('');
    display.value = firstNumbers;
  } else if (operators.length > 0) {
    numbers.push(2);
    nextNumbers = numbers.join('');
    display.value = nextNumbers;
  }
});

three.addEventListener('click', ()=> {
  if (operators.length === 0) {
    numbers.push(3);
    firstNumbers = numbers.join('');
    display.value = firstNumbers;
  } else if (operators.length > 0) {
    numbers.push(3);
    nextNumbers = numbers.join('');
    display.value = nextNumbers;
  }
});

four.addEventListener('click', ()=> {
  if (operators.length === 0) {
    numbers.push(4);
    firstNumbers = numbers.join('');
    display.value = firstNumbers;
  } else if (operators.length > 0) {
    numbers.push(4);
    nextNumbers = numbers.join('');
    display.value = nextNumbers;
  }
});

five.addEventListener('click', ()=> {
  if (operators.length === 0) {
    numbers.push(5);
    firstNumbers = numbers.join('');
    display.value = firstNumbers;
  } else if (operators.length > 0) {
    numbers.push(5);
    nextNumbers = numbers.join('');
    display.value = nextNumbers;
  }
});

six.addEventListener('click', ()=> {
  if (operators.length === 0) {
    numbers.push(6);
    firstNumbers = numbers.join('');
    display.value = firstNumbers;
  } else if (operators.length > 0) {
    numbers.push(6);
    nextNumbers = numbers.join('');
    display.value = nextNumbers;
  }
});

seven.addEventListener('click', ()=> {
  if (operators.length === 0) {
    numbers.push(7);
    firstNumbers = numbers.join('');
    display.value = firstNumbers;
  } else if (operators.length > 0) {
    numbers.push(7);
    nextNumbers = numbers.join('');
    display.value = nextNumbers;
  }
});

eight.addEventListener('click', ()=> {
  if (operators.length === 0) {
    numbers.push(8);
    firstNumbers = numbers.join('');
    display.value = firstNumbers;
  } else if (operators.length > 0) {
    numbers.push(8);
    nextNumbers = numbers.join('');
    display.value = nextNumbers;
  }
});

nine.addEventListener('click', ()=> {
  if (operators.length === 0) {
    numbers.push(9);
    firstNumbers = numbers.join('');
    display.value = firstNumbers;
  } else if (operators.length > 0) {
    numbers.push(9);
    nextNumbers = numbers.join('');
    display.value = nextNumbers;
  }
});

zero.addEventListener('click', ()=> {
  if (operators.length === 0) {
    numbers.push(0);
    firstNumbers = numbers.join('');
    display.value = firstNumbers;

  } else if (operators.length > 0) {
    numbers.push(0);
    nextNumbers = numbers.join('');
    display.value = nextNumbers;
        
    };

});


plus.addEventListener('click', ()=> {
  numbers = [];
  if (operators.length > 0) {
    display.value = operate(Number(firstNumbers), operators[0], Number(nextNumbers));
    operators = [];
    firstNumbers = display.value; 
    operators.push('+');
    
  } else {
    numbers = [];
    operators.push('+');
  }
});

minus.addEventListener('click', ()=> {
  numbers = [];
  if (operators.length > 0) {
    display.value = operate(Number(firstNumbers), operators[0], Number(nextNumbers));
    operators = [];
    firstNumbers = display.value;
    operators.push('-');
    
  } else {
    numbers = [];
    operators.push('-');
  }
});

times.addEventListener('click', ()=> {
  if (operators.length > 0) {
    display.value = operate(Number(firstNumbers), operators[0], Number(nextNumbers));
    operators = [];
    firstNumbers = display.value;
    operators.push('*');
    
  } else {
    numbers = [];
    operators.push('*');
  }
});

into.addEventListener('click', ()=> {
  numbers = [];
  if (operators.length > 0) {
    display.value = operate(Number(firstNumbers), operators[0], Number(nextNumbers));
    operators = [];
    firstNumbers = display.value;
    operators.push('/');
    
  } else {
    numbers = [];
    operators.push('/');
  }
});

equals.addEventListener('click', ()=> {
  numbers = [];
  testNum = (operate(Number(firstNumbers), operators[0], Number(nextNumbers)));
  console.log(firstNumbers);
  if (firstNumbers === '0' && operators[0] === '/' && nextNumbers === '0') {
    display.value = 'Computer says NO'
    operators = [];
    
  }
  else if (Number.isInteger(testNum)) {
    display.value = (operate(Number(firstNumbers), operators[0], Number(nextNumbers)));
    operators = [];
  } else {
    display.value = (operate(Number(firstNumbers), operators[0], Number(nextNumbers))).toFixed(2);
    operators = [];
  }
  
});

decimal.addEventListener('click', ()=> {
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



//need to make decimal work and round numbers

  
 