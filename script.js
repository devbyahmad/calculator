 const display = document.getElementById('display');

  function append(value) {
    const current = display.innerText;

    
    if (current === '0' || current === 'Error') {
      if (value === '.') {
        display.innerText = '0.';
      } else {
        display.innerText = value;
      }
      return;
    }


    if (value === '.') {
      const parts = current.split(/[\+\-\*\/]/);
      const lastPart = parts[parts.length - 1];
      if (lastPart.includes('.')) return;
    }

    display.innerText += value;
  }

  function clearDisplay() {
    display.innerText = '0';
  }

  function calculate() {
    try {
      const expression = display.innerText.replace('%', '/100');
      const result = eval(expression);
      display.innerText = result;
    } catch {
      display.innerText = 'Error';
    }
  }

  function invert() {
    try {
      const current = display.innerText;
      const value = eval(current);
      display.innerText = value * -1;
    } catch {
      display.innerText = 'Error';
    }
  }