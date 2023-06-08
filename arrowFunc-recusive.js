// Demonstrating arrow function with recursive function

// console.log("250 Dec is " + decimalToBinary(250) + " in Bin");
// console.log("250 Dec is " + decimalToOctal(250) + " in Oct");
// console.log("250 Dec is " + decimalToHexadecimal(250) + " in Hex");

const decimalToBinary = decimal => {
  if (decimal === 0) {
    return '';
  } else {
    return decimalToBinary(Math.floor(decimal / 2)) + (decimal % 2);
  }
};

const decimalToOctal = decimal => {
  if (decimal === 0) {
    return '';
  } else {
    return decimalToOctal(Math.floor(decimal / 8)) + (decimal % 8);
  }
};

const decimalToHexadecimal = decimal => {
  const hexDigits = '0123456789ABCDEF';
  if (decimal === 0) {
    return '';
  } else {
    return decimalToHexadecimal(Math.floor(decimal / 16)) + hexDigits[decimal % 16];
  }
};

console.log("250 Dec is " + decimalToBinary(250) + " in Bin");
console.log("250 Dec is " + decimalToOctal(250) + " in Oct");
console.log("250 Dec is " + decimalToHexadecimal(250) + " in Hex");

    // const convertNumber = () => {
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