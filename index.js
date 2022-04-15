let str;
let num;
let variable;

// 1. Write a JavaScript function that reverse a number.

num = 12345;

function reverseNum(num) {
  reversedNum = +(num + "").split("").reverse().join("");
  return `1. ${num} reversed is: ${reversedNum}`;
}

console.log(reverseNum(num));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?

str = "nurses run";

function checkPalindrome(str) {
  let originalStripped = str.replace(" ", "");
  let reversedStripped = originalStripped.split("").reverse().join("");

  if (originalStripped === reversedStripped) {
    return `2. ${str} is a palindrome!`;
  }
  return `2.1 ${str} is not a palindrome!`;
}

console.log(checkPalindrome(str));
console.log(checkPalindrome("Palindrome"));

// 3. Write a JavaScript function that generates all combinations of a string

str = "dog";

function combinateStr(str) {
  let possible_strings = [];
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      possible_strings.push(str.slice(i, j));
    }
  }
  return possible_strings;
}

console.log(`3. ${str} can be combined into: ${combinateStr(str)}`);

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order

str = "webmaster";

function sortAlphabetically(str) {
  sortedStr = str.split("").sort().join("");
  return `4. ${str} sorted alphabeticlly would be: ${sortedStr}`;
}

console.log(sortAlphabetically(str));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

str = "the quick brown fox";

function capitalizeString(str) {
  return str.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

console.log("5.", capitalizeString(str));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

str = "Web Development Tutorial";

function chooseLongest(str) {
  let words = str.split(" ");
  let wordsLength = new Array();
  words.forEach((element) => {
    wordsLength.push(element.length);
  });
  // Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments
  // (for function calls) or elements (for array literals) are expected
  let longest_index = wordsLength.indexOf(Math.max(...wordsLength));

  return words[longest_index];
}

console.log(`6. "${chooseLongest(str)}" is the longest word in ${str}`);

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

str = "Web Development Tutorial";

function countVowels(str) {
  let vowelCount = 0;
  let vowelArray = ["a", "e", "i", "o", "u"];
  for (i = 0; i < str.length; i++) {
    if (vowelArray.indexOf(str[i].toLowerCase()) >= 0) {
      vowelCount += 1;
    }
  }

  return vowelCount;
}

console.log(`7. "${str}" has ${countVowels(str)} vowels`);

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

num = 269;

function testPrime(num) {
  for (i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) {
      return [false, "not prime"];
    }

    return [num > 1, "prime"];
  }
}

console.log(`8. ${num} is ${testPrime(num)[1]}`);

// 9. Write a JavaScript function which accepts an argument and returns the type.

variable = true;

function returnType(variable) {
  return typeof variable;
}

console.log(`9. ${variable} is ${returnType(variable)}`);

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

// build array of undefined, first map to extract an array composed of n elements that are copies of the original array
// second map replaces the values with the index, but substracts 1 from it everytime so
// on the first array it goes from (0, 0, 0) to (0, -1, -2), then it will parse any 0 to one, by coercing to boolean and then using a negator "!"
const buildMatrix = (n) => [...Array(n)].map((e, i, a) => a.map((e) => +!i--)); //e is the array, i is the index, a is n copies of the array

console.log("10.");
console.log(buildMatrix(3));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second

variable = [9, 13, 21, 42, 7];

function findLowestAndSecondGreatest(variable) {
  return [
    variable.sort((a, b) => a - b)[0],
    variable.sort((a, b) => a - b)[variable.length - 2],
  ];
}

console.log(
  `11. ${variable} => The lowest number is ${
    findLowestAndSecondGreatest(variable)[0]
  } and the second greatest is ${findLowestAndSecondGreatest(variable)[1]}`
);

// 12. Write a JavaScript function which says whether a number is perfect.

num = 496;

function isPerfect(num) {
  divisorSum = 0;
  for (i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      divisorSum += i;
    }
  }

  if (num === divisorSum && divisorSum !== 0) {
    return "Perfect";
  }

  return "Imperfect";
}

console.log(`12. ${num} is ${isPerfect(num)}`);

// 13. Write a JavaScript function to compute the factors of a positive integer.

num = 64;

function findFactors(num) {
  factors = [];
  for (i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  factors.push(num);

  return factors;
}

console.log(`13. ${num} has the following factors: ${findFactors(num)}`);

// 14. Write a JavaScript function to convert an amount to coins.

let coins = [25, 10, 5, 1];
num = 64;

function convert2Coins(num, coins) {
  coinsSorted = coins.sort((a, b) => -a + b);
  coinPouch = [];

  for (i = 0; i < coins.length; i++) {
    while (num - coins[i] >= 0) {
      num -= coins[i];
      coinPouch.push(coins[i]);
      console.log(num);
    }
  }

  console.log(num);

  return coinPouch;
}

console.log("14.", convert2Coins(num, coins));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

num = 10;
let exp = 2;

function raiseToExp(num, exp) {
  return num ** exp;
}

console.log(`15. ${num} ^ ${exp} = ${raiseToExp(num, exp)}`);

// 16. Write a JavaScript function to extract unique characters from a string.

str = "thequickbrownfoxjumpsoverthelazydog";

function uniqueCharcters(str) {
  let uniqueObject = {};
  let newStr = [];
  for (i = 0; i < str.length; i++) {
    if (Object.keys(uniqueObject).indexOf(str[i]) >= 0) {
      uniqueObject[str[i]] += 1;
    } else {
      uniqueObject[str[i]] = 1;
      newStr.push(str[i]);
    }
  }

  return newStr.join("");
}

console.log(`16. ${str} ==> ${uniqueCharcters(str)}`);

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

str = "thequickbrownfoxjumpsoverthelazydog";

function uniqueCharcters(str) {
  let uniqueObject = {};
  let newStr = [];
  for (i = 0; i < str.length; i++) {
    if (Object.keys(uniqueObject).indexOf(str[i]) >= 0) {
      uniqueObject[str[i]] += 1;
    } else {
      uniqueObject[str[i]] = 1;
      newStr.push(str[i]);
    }
  }

  return uniqueObject;
}

console.log(`17. ${str}`);
console.log(uniqueCharcters(str));

// 18. Write a function for searching JavaScript arrays with a binary search.

str = "123456789";
let desiredValue = "9";

function binarySearch(array, desiredValue) {
  let index = 0;
  if (array.length <= 1) return null;
  const middleIndex = Math.floor(array.length / 2);

  if (Number(desiredValue) === Number(array[middleIndex])) {
    return middleIndex;
  } else if (Number(desiredValue) > Number(array[middleIndex])) {
    index =
      binarySearch(array.slice(middleIndex, array.length), desiredValue) +
      middleIndex;
    return index;
  } else {
    index += binarySearch(array.slice(0, middleIndex), desiredValue);
    return index;
  }
}

console.log(
  `18. ${str} => ${desiredValue} is in position: ${binarySearch(
    str.split(""),
    desiredValue
  )}`
);

// 19. Write a JavaScript function that returns array elements larger than a number.

variable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num = 5;

function evaluateSize(num) {
  return (element, index, array) => element >= num; // index, array are not used, but will naturally be extracted
}

console.log("19.");
console.log(variable.filter(evaluateSize(num)));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.

num = 10;

function makeRandomString(num) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  randomString = [];

  for (i = 0; i < num; i++) {
    randomString.push(chars.charAt(Math.floor(Math.random() * chars.length)));
  }

  return randomString.join("");
}

console.log(makeRandomString(num));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.

function subsetN(array, array_size) {
  let result_set = [],
    result;

  for (i = 0; i < Math.pow(2, array.length); i++) {
    result = [];
    j = array.length - 1;
    do {
      if ((i & (1 << i)) !== 0) {
        result.push(array[i]);
      }
    } while (j--);

    if (result.length >= array_size) {
      result_set.push(result);
    }
  }

  return result_set;
}

console.log(subsetN([1, 2, 3], 2));
