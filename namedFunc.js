// Demonstrating named function

console.log("115 Dec is " + decimalToBinary(115) + " in Bin");
console.log("115 Dec is " + decimalToOctal(115) + " in Oct");
console.log("115 Dec is " + decimalToHexadecimal(115) + " in Hex");

function decimalToBinary(decimal) {
  return decimal.toString(2);
}

function decimalToOctal(decimal) {
  return decimal.toString(8);
}

function decimalToHexadecimal(decimal) {
  return decimal.toString(16).toUpperCase();
}

// function convertNumber() {
//   const decimalInput = document.getElementById('decimal').value;
//   const decimal = parseInt(decimalInput, 10);

//   if (!isNaN(decimal)) {
//     document.getElementById('binary').textContent = decimalToBinary(decimal);
//     document.getElementById('octal').textContent = decimalToOctal(decimal);
//     document.getElementById('hexadecimal').textContent = decimalToHexadecimal(decimal);
//   } else {
//     document.getElementById('binary').textContent = '';
//     document.getElementById('octal').textContent = '';
//     document.getElementById('hexadecimal').textContent = '';
//   }
// }