let s = "race a car";
let lowerCase;
let alphaNumRemoval

var isPalindrome = function(s) {
    let lowerCase = s.toLowerCase();
    let alphaNumRemoval = lowerCase.replace(/[^a-z0-9]/gi, '');
    let reverseString = alphaNumRemoval.split('').reverse().join('');

    return alphaNumRemoval == reverseString ? true : false;
};
let result = isPalindrome(s);
console.log(result);