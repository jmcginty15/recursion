/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;
  else return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0) {
  const currentWord = words[i];
  if (i === words.length - 1) return currentWord.length;
  else {
    const nextWordLength = longest(words, i + 1);
    if (nextWordLength > currentWord.length) return nextWordLength;
    else return currentWord.length;
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  if (i >= str.length) return '';
  else return str[i] + everyOther(str, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  if (i >= str.length / 2) return true;
  else {
    if (str[i] === str[str.length - 1 - i] && isPalindrome(str, i + 1)) return true;
    else return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i >= arr.length) return -1;
  else if (arr[i] === val) return i;
  else return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0) {
  if (i >= str.length) return '';
  else return revString(str, i + 1) + str[i];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const arr = [];
  for (let property in obj) {
    if (typeof obj[property] === 'string') arr.push(obj[property]);
    else if (typeof obj[property] === 'object') {
      const nextArr = gatherStrings(obj[property]);
      for (let str of nextArr) arr.push(str);
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1, middle = Math.floor((left + right) / 2)) {
  if (arr[middle] === val) return middle;
  else if (arr[left] === val) return left;
  else if (arr[right] === val) return right;
  else if (left >= right || arr[left] > val || arr[right] < val) return -1;
  else {
    if (arr[middle] < val) left = middle;
    else if (arr[middle] > val) right = middle;
    return binarySearch(arr, val, left, right);
  }
}

const isBalanced = (str) => {
  const arr = str.split('');
  const openBrackets = '({[';
  const closeBrackets = ']})';
  while (arr.length) {
    while (arr.length && closeBrackets.indexOf(arr[arr.length - 1]) === -1) {
      if (openBrackets.indexOf(arr[arr.length - 1]) != -1) return false;
      else arr.pop();
    }
    if (!arr.length) return true;
    else {
      let openMatchBracket;
      const closeMatchBracket = arr.pop();
      if (closeMatchBracket === ')') openMatchBracket = '(';
      else if (closeMatchBracket === '}') openMatchBracket = '{';
      else if (closeMatchBracket === ']') openMatchBracket = '[';
      const subArr = [];
      let count = 1;
      while (arr.length && count > 0) {
        const nextChar = arr.pop();
        subArr.unshift(nextChar);
        if (nextChar === closeMatchBracket) count += 1;
        else if (nextChar === openMatchBracket) count -= 1;
      }
      const lastChar = subArr.shift();
      if (lastChar != openMatchBracket) return false;
      else return isBalanced(subArr.join(''));
    }
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  isBalanced
};
