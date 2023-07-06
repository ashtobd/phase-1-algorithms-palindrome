function isPalindrome(word) {
  // Write your algorithm here
  const letters = word.split("")
  const reverseLetters = letters.reverse()
  const combineLetters = reverseLetters.join("")

  if (word === combineLetters) {
    return true
  }
  else {
    return false
  }
} 

/* 
  Add your pseudocode here
  isPalindrome function should split the word in half, reverse the two halves, then combine to see if it
  matches the original word.
*/

/*
  Add written explanation of your solution here
  isPalindrome function takes word and uses .split; then it reverses the two halves using .reverse; it then
  joins to two reversed halves together.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
