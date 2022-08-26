function isPalindrome(word) {
  // Write your algorithm here
  let wordArray=word.split('')
  let reversedArray=wordArray.reverse()
  let reversedWord=reversedArray.join('')
  if (reversedWord===word){
    return true
  }
  else{
    return false
  }
  


}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here

  first split the word.
  then  reverse the split word
  After which you join the reverse splitted word
   then check if the reversed word is equal to the word 
   if its true or equal tthen return the word
   if its not equal or false then return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("ALI"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;