const calculator = (a, b, operation) => {
  if (operation === '+') return a + b;
  if (operation === '-') return a - b;
  if (operation === '*') return a * b;
  if (operation === '/') return b === 0 ? "Can't divide by 0!" : a / b;
}

   