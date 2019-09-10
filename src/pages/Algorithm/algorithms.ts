export const algorithms = [
  {
    "id": "palindrome",
    "label": "Palindrome",
    "content": `
      ### check Palindrome with built-in (chaining) functions

      const palindromeWithChaining = () => {
        let str = 'A man a plan a canal Panama';
        let leftCounter = str.toLowerCase().replace(/ /g, '');
        let rightCounter = leftCounter.split('').reverse().join('');
        return leftCounter === rightCounter;
      }

      palindromeWithChaining();

      ### check Palindrome with loop function 

      const checkPalindromeWithLoop = () => {
        let str = 'A man a plan a canal Panama';
        let newStr = str.toLowerCase().replace(/ /g, '');
        const strLen = newStr.length;
        for (i = 0; i < strLen / 2; i++) {
          if(newStr[i] !== newStr[strLen - 1 - i]) { // compare left and right character base on iterater and 'strLen - 1 - i'.
            return false;
          }
          return true;
        }
      }

      checkPalindromeWithLoop();
    `
  },
  {
    "id": "findMissingNumber",
    "label": "Find Missing Number",
    "content": `
      ### Check missing number in array

      const findMissingNumber = () => {
        const arrayNums = [9,7,4,5,2,1,6,3];
        const sortArray = arrayNums.sort();
        
        for (let i = 0; i < sortArray.length; i++) {
          if(sortArray[i + 1] === undefined)
            return;
          let counterNumber = sortArray[i + 1] - 1;
          if(counterNumber !== sortArray[i]) {
            console.log(counterNumber);
          }
        }
      }

      findMissingNumber();
    `
  },
  {
    "id": "findDuplicateNumber",
    "label": "Find Duplicate number",
    "content": `
      ### Check duplicate number in array

      const findDuplicateNumbers = () => {
        var arrayNums = [1, 8, 1, 1, 4 , 4, 5, 9, 8, 3, 4, 6, 7, 2, 9];
        var sortArray = arrayNums.sort();
        var newArrays = [];
        for (var i = 0; i < sortArray.length; i++) {

          if (sortArray[i + 1] == undefined) break;

          if (sortArray[i] == sortArray[i + 1] && !newArrays.includes(sortArray[i])) {
            newArrays.push(sortArray[i]);
          }

        }

        console.log(newArrays);
      }

      findDuplicateNumbers();
    `
  },
];
