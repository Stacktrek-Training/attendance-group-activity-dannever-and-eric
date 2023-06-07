function attendance(word) {
  const trimmed = word.trim(); 
  const toLower = trimmed.toLowerCase();
  const presentWords = ['minahal', 'nasaktan', 'nagmahal'];
  
  return presentWords.includes(toLower) ? 'Present' : 'Absent';

  /*
    if (words.includes(word)) {
      return 'Present';
    } else {
      return 'Absent';
    }
  */
  }
  
  // Example usage:
  console.log(attendance('Minahal'));     // Output: Present
  console.log(attendance('Nasaktan'));    // Output: Present
  console.log(attendance('Nagmahal'));    // Output: Present
  console.log(attendance('NotPresent'));  // Output: Absent
  console.log(attendance(' '));           // Output: Absent