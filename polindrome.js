function findPalindrome(dataIn){
  var reverseIn = dataIn.split("").reverse().join("");
  
  if(dataIn === reverseIn){
    return console.log("it's a palindrome")
  }else  return console.log("it's not a palindrome");
}

findPalindrome("alggla");
findPalindrome("algytgla");