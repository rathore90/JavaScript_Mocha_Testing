export function isPalindrome(inputString) {
  // TODO: write your code here
  var l = inputString.length;
  for (var i = 0; i < l / 2; i++) {
    if (inputString.charAt(i) !== inputString.charAt(l - 1 - i)) {
      return false;
    }
  }
  return true;
}