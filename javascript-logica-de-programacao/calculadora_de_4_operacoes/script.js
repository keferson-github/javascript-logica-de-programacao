const input1 = prompt("enter the first number:");
const input2 = prompt("enter the secound number:");

const x = parseFloat(input1);
const y = parseFloat(input2);

const add = x + y;
const subtraction = x - y;
const multiplication = x * y;
const division = x / y;

alert(
  "Results:\n" +
  "\nAdd: " +
  add +
  "\nSubtraction: " +
  subtraction +
  "\nMultiplication: " +
  multiplication +
  "\nDivision: " +
  division
);
