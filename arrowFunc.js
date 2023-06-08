// Demonstrating arrow function

// console.log("150 Dec is " + decimalToBinary(150) + " in Bin");
// console.log("150 Dec is " + decimalToOctal(150) + " in Bin");
// console.log("150 Dec is " + decimalToHexadecimal(150) + " in Bin");

const decimalToBinary = decimal => {
  return decimal.toString(2);
};

const decimalToOctal = decimal => {
  return decimal.toString(8);
};

const decimalToHexadecimal = decimal => {
  return decimal.toString(16).toUpperCase();
};

console.log("150 Dec is " + decimalToBinary(150) + " in Bin");
console.log("150 Dec is " + decimalToOctal(150) + " in Oct");
console.log("150 Dec is " + decimalToHexadecimal(150) + " in Hex");

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
