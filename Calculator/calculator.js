let displayValue = '';

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('result').value = displayValue;
}
