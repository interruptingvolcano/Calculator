
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

  let display = document.querySelector('.display');

  let numbers = [];
  let firstNumber = [];
  let secondNumber = [];
  let operators = [];
  let equalsArray = [];


  
  one.addEventListener('click', ()=> {
    if (operators.length > 0) {
      secondNumber.push(1);
    }
    numbers.push(1);
    display.value = numbers.join('');
    });

  two.addEventListener('click', ()=> {
    if (operators.length > 0) {
      secondNumber.push(2);
    }
    numbers.push(2);
    display.value = numbers.join('');
  });

  three.addEventListener('click', ()=> {
    if (operators.length > 0) {
      secondNumber.push(3);
    }
    numbers.push(3);
    display.value = numbers.join('');
  });

  four.addEventListener('click', ()=> {
    if (operators.length > 0) {
      secondNumber.push(4);
    }
    numbers.push(4);
    display.value = numbers.join('');
  });

  five.addEventListener('click', ()=> {
    if (operators.length > 0) {
      secondNumber.push(5);
    }
    numbers.push(5);
    display.value = numbers.join('');
  });

  six.addEventListener('click', ()=> {
    if (operators.length > 0) {
      secondNumber.push(6);
    }
    numbers.push(6);
    display.value = numbers.join('');
  });

  seven.addEventListener('click', ()=> {
    if (operators.length > 0) {
      secondNumber.push(7);
    }
    numbers.push(7);
    display.value = numbers.join('');
  });

  eight.addEventListener('click', ()=> {
    if (operators.length > 0) {
      secondNumber.push(8);
    }
    numbers.push(8);
    display.value = numbers.join('');
  });

  nine.addEventListener('click', ()=> {
    if (operators.length > 0) {
      secondNumber.push(9);
    }
    numbers.push(9);
    display.value = numbers.join('');
  });

  zero.addEventListener('click', ()=> {
    if (operators.length > 0) {
      secondNumber.push(0);
    }
    numbers.push(0);
    display.value = numbers.join('');
  });


  plus.addEventListener('click', ()=> {
    if (operators.length > 0) {
      console.log(firstNumber);
      console.log(secondNumber);
      firstNumber = Number(firstNumber);
      secondNumber = Number(secondNumber);
      display.value = operate(firstNumber, operators.join(), secondNumber);
      
      secondNumber = [];
      console.log(nextNumbers() + firstNumber);
    }
    firstNumber = numbers.splice(0).join('');
    operators.push('+');
    
  });

  minus.addEventListener('click', ()=> {
    firstNumber = numbers.splice(0).join('');
    operators.push('-');
  });

  times.addEventListener('click', ()=> {
    firstNumber = numbers.splice(0).join('');
    operators.push('*');
  });

  into.addEventListener('click', ()=> {
    firstNumber = numbers.splice(0).join('');
    operators.push('/');
  });



  equals.addEventListener('click', ()=> {
    if (operators.length > 0) {
      firstNumber = Number(firstNumber);
      secondNumber = Number(secondNumber.join(''));
      display.value = operate(firstNumber, operators.join(), secondNumber);
      equalsArray.push(1);
      operators = [];
      
    };
    
  });


  function nextNumbers() {
    return numbers.reduce((total, firstNumber) => total + operate(total, operators.join(), firstNumber), 0)

    
    
  };
// when I click on a second operator, e.g., 1 + 2 * 4, that click should return a value like equals.


  




















