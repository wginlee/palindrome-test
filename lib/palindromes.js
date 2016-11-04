function isPalindrome(s) {
  var stringReverse = s.split("").reverse().join("").replace(/\s/g, '');
  // console.log(stringReverse);
  var s2 = s.replace(/\s/g, '');
  return s2 === stringReverse;
}

module.exports = isPalindrome;
