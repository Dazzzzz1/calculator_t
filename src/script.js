import './style.css';

let curInput = '0';
let prevInput = '';
let operation = null;
let reset = false;

let display = document.querySelector('.calc_input');

function updateInput() {
  if (operation !== null) {
    display.value = `${prevInput} ${operation} ${reset ? '' : curInput}`;
  } else {
    display.value = curInput;
  }
}

function addNum(num) {
  if (curInput === '0' || reset) {
    curInput = num;
    reset = false;
  } else {
    curInput += num;
  }
  updateInput();
}

function separator() {
  if (reset) {
    curInput = '0.';
    reset = false;
    updateInput();
    return;
  }
  if (!curInput.includes('.')) {
    curInput += '.';
    updateInput();
  }
}

function appendOp(op) {
  if (operation !== null) calculate();
  prevInput = curInput;
  operation = op;
  reset = true;
}

function calculate() {
  if (operation === null || reset) return;
  let prev = parseFloat(prevInput);
  let current = parseFloat(curInput);
  let result;
  switch (operation) {
    case '+':
      result = add(prev, current);
      break;
    case '-':
      result = subtract(prev, current);
      break;
    case '*':
      result = multiply(prev, current);
      break;
    case '/':
      result = divide(prev, current);
      break;
    default:
      return;
  }
  curInput = result.toString();
  operation = null;
  updateInput();
}
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    alert('ERROR: division by zero is not allowed!');
    return '0';
  }
  return a / b;
}

function changeSign() {
  curInput = (parseFloat(curInput) * -1).toString();
  updateInput();
}

function getPercent() {
  curInput = (parseFloat(curInput) / 100).toString();
  updateInput();
}

function clearDisplay() {
  curInput = '0';
  prevInput = '';
  operation = null;
  updateInput();
}
updateInput();

let themeToggler = document.querySelector('.themeToggler');
let calculator = document.querySelector('.cacl_container');

themeToggler.addEventListener('click', () => {
  calculator.classList.toggle('light');
  document
    .querySelectorAll(
      '.clear, .sign, .percent, .clr_toggle, .operator, .divide, .equals',
    )
    .forEach((btn) => {
      btn.classList.toggle('light');
    });

  const icon = themeToggler.querySelector('i');
  if (calculator.classList.contains('light')) {
    icon.classList.replace('fa-sun', 'fa-moon');
  } else {
    icon.classList.replace('fa-moon', 'fa-sun');
  }
});

window.addNum = addNum;
window.separator = separator;
window.appendOp = appendOp;
window.calculate = calculate;
window.changeSign = changeSign;
window.getPercent = getPercent;
window.clearDisplay = clearDisplay;
