// Demonstrating arrow function with recursive function

// console.log("15 Dec is " + decimalToBinary(15) + " in Bin");
// console.log("15 Dec is " + decimalToOctal(15) + " in Oct");
// console.log("15 Dec is " + decimalToHexadecimal(15) + " in Hex");

const decimalToBinary = function(decimal) {
  // return decimal.toString(2);
  if (decimal === 0) {
    return '';
  } else {
    return decimalToBinary(Math.floor(decimal / 2)) + (decimal % 2);
  }
};

const decimalToOctal = function(decimal) {
  // return decimal.toString(8);
  if (decimal === 0) {
    return '';
  } else {
    return decimalToOctal(Math.floor(decimal / 8)) + (decimal % 8);
  }
};

const decimalToHexadecimal = function(decimal) {
  // return decimal.toString(16).toUpperCase();
  const hexDigits = '0123456789ABCDEF';
  if (decimal === 0) {
    return '';
  } else {
    return decimalToHexadecimal(Math.floor(decimal / 16)) + hexDigits[decimal % 16];
  }
};

console.log("15 Dec is " + decimalToBinary(15) + " in Bin");
console.log("15 Dec is " + decimalToOctal(15) + " in Oct");
console.log("15 Dec is " + decimalToHexadecimal(15) + " in Hex");

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
