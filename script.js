class Calculator {
  constructor(displayOutput) {
    this.displayOutput = displayOutput;
    this.clear();

  };

  clear() {
    this.displayOutput.innerText = '';
    this.firstNumber = '';
    this.totalNumber = '';
    this.nextNumber = '';
    this.operator = undefined;
  };

  appendNumber(number) {
    if (number === '.' && this.firstNumber.includes('.') || this.firstNumber.length > 14 || this.nextNumber.length > 14) {
      return;
    }
    if (this.operator === undefined) {
      this.firstNumber = this.firstNumber.toString() + number.toString();
      this.totalNumber = this.firstNumber;

    } else {
      if (number === '.' && this.nextNumber.includes('.'))
        return;
      this.nextNumber = this.nextNumber.toString() + number.toString(); 
    };
    
  };
  
  chooseOperator(operator) {
    if (this.totalNumber === '') return;
    else if (this.totalNumber !== '') {
        this.compute();    
    }
    this.firstNumber = '';
    this.operator = operator;

  };

  compute() {
    let compute;
    const first = parseFloat(this.totalNumber);
    const next = parseFloat(this.nextNumber);

    if (isNaN(first) || isNaN(next)) return;
  
    switch(this.operator) {
        case '+':
          compute = first + next;
          break;
        case '-':
          compute = first - next;
          break;
        case '*':
          compute = first * next;
          break;
        case '/':
          compute = first / next;
          break;
        default:
          return;
      }
      if (Number.isInteger(compute)) {
        this.displayOutput.innerText = this.displayComma(compute)
      } else {
        this.displayOutput.innerText = this.displayComma((compute).toFixed(2));
      };
    this.operator = undefined;  
    this.totalNumber = compute;
    // this.firstNumber = '';
    this.nextNumber = '';
  };

  delete () {
    if (this.operator === undefined) {
      this.totalNumber = this.totalNumber.toString().slice(0, -1);
    this.firstNumber = this.totalNumber;
    }
    
    this.nextNumber = this.nextNumber.toString().slice(0, -1);
    console.log(this.nextNumber);

  };

  displayComma(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0});
    };
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay;
    };
  };

  updateDisplay() {
    if (this.operator !== undefined) {
      this.displayOutput.innerText = this.displayComma(this.nextNumber);

    } else {
      this.displayOutput.innerText = this.displayComma(this.totalNumber);
    }; 
  };

};

const numberButtons = document.querySelectorAll('[data-number]');

const operatorButtons = document.querySelectorAll('[data-operator]');

const equalsButton = document.querySelector('[data-equals]');

const allClearButton = document.querySelector('[data-all-clear]');

const deleteButton = document.querySelector('[data-delete]');

const displayOutput = document.querySelector('[data-display]');


const calculator = new Calculator(displayOutput);


numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay(); 
  });
});

operatorButtons.forEach(button => {
  button.addEventListener('click', ()=> {
      calculator.chooseOperator(button.innerText);  
  })
});

allClearButton.addEventListener('click', ()=> {
  calculator.clear();
});

deleteButton.addEventListener('click', ()=> {
  calculator.delete();
  calculator.updateDisplay();
});

equalsButton.addEventListener('click', () => {
  console.log(calculator.nextNumber);
  if (calculator.nextNumber === '0' && calculator.operator === '/') {
    displayOutput.innerText = 'Computer says NO';
  } else {
    calculator.compute()
  };

  // calculator.updateDisplay();
});

//Keyboard Support
document.addEventListener('keyup', (event) => {
  console.log(event.key);
  if (event.key >= 0 && event.key <= 9 || event.key === '.') {
    calculator.appendNumber(event.key);
    calculator.updateDisplay(); 

  } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') { 
    if (event.key === '/') {
      event.preventDefault();
    }
    calculator.chooseOperator(event.key);

  } else if (event.key === '=') {
    calculator.compute(event.key);
    calculator.updateDisplay();

  } else if (event.key === 'Backspace') {
    calculator.delete(event.key);
    calculator.updateDisplay();

  } else if (event.key === 'Escape') {
    calculator.clear(event.key);
    calculator.updateDisplay();

  } 

  
});

