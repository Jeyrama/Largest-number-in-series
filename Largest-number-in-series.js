/*
In the following 10 digit number: 1234567890.
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence 
of five consecutive digits found within the number given. 

The number will be passed in as a string of only digits. 
It should return a five digit integer. 
The number passed may be as large as 1000 digits. 
*/


// Solution

function solution(digits) {
  let answer = 0;

  for (let i = 0; i < digits.length; i++) {
    let number = digits.substr(i, 5);
    if (Number(number) > answer) {
      answer = Number(number);
    }
  }
  return answer;
}

// or

function solution(digits) {
  let s = [];
  for (let i = 0; i < digits.length - 4; i++) {
    s.push(digits.substr(i,5));
  };
  return Math.max(...s);
}

// or

function solution(digits) {
  if (digits.length <= 5) return digits;

  let largestFiveDigitNumber = digits.slice(0, 5);
  for (let i = 5; i < digits.length; i++) {
    let currentFiveDigitNumber = digits.slice(i, i + 5);
    if (currentFiveDigitNumber > largestFiveDigitNumber) {
      largestFiveDigitNumber = currentFiveDigitNumber;
    }
  }
  return Number(largestFiveDigitNumber)
}