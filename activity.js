function checkWord(word) {
  const words = ["minahal", "nasaktan", "nagmahal"];
  if (words.includes(word.toLowerCase().trim())) {
    return "Present";
  } else {
    return "Absent"; //TODO: refactor
  }
}
console.log(checkWord(" Minahal"));
console.log(checkWord("Nasaktan"));
console.log(checkWord("Nagmahal"));
console.log(checkWord(" minahal"));
console.log(checkWord("nasaktan"));
console.log(checkWord("nagmahal"));
console.log(checkWord("kamote"));
