function isPalindrome(s) {
  var stringReverse = s.split("").reverse().join("").replace(/\s/g, '');
  // console.log(stringReverse);
  s = s.replace(/\s/g, '');
  return s == stringReverse;
}

module.exports = isPalindrome;
