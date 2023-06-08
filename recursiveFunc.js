//Demonstrating recursive function

console.log("125 Dec is " + decimalToBinary(125) + " in Bin");
console.log("125 Dec is " + decimalToOctal(125) + " in Oct");
console.log("125 Dec is " + decimalToHexadecimal(125) + " in Hex");

function decimalToBinary(decimal) {
  if (decimal === 0) {
    return '';
  } else {
    return decimalToBinary(Math.floor(decimal / 2)) + (decimal % 2);
  }
}

function decimalToOctal(decimal) {
  if (decimal === 0) {
    return '';
  } else {
    return decimalToOctal(Math.floor(decimal / 8)) + (decimal % 8);
  }
}

function decimalToHexadecimal(decimal) {
  const hexDigits = '0123456789ABCDEF';
  if (decimal === 0) {
    return '';
  } else {
    return decimalToHexadecimal(Math.floor(decimal / 16)) + hexDigits[decimal % 16];
  }
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
