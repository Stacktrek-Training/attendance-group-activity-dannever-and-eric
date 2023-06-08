// Demonstrating anonymous function

// console.log("250 Dec is " + decimalToBinary(250) + " in Bin");
// console.log("250 Dec is " + decimalToOctal(250) + " in Oct");
// console.log("250 Dec is " + decimalToHexadecimal(250) + " in Hex");

const decimalToBinary = function(decimal) {
  return decimal.toString(2);
};

const decimalToOctal = function(decimal) {
  return decimal.toString(8);
};

const decimalToHexadecimal = function(decimal) {
  return decimal.toString(16).toUpperCase();
};

console.log("250 Dec is " + decimalToBinary(250) + " in Bin");
console.log("250 Dec is " + decimalToOctal(250) + " in Oct");
console.log("250 Dec is " + decimalToHexadecimal(250) + " in Hex");

    // const convertNumber = function() {
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
    // };
