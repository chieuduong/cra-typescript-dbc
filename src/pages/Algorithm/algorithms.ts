export const algorithms = [
  {
    "id": "palindrome",
    "label": "Palindrome",
    "content": `
      ### check Palindrome with built-in (chaining) functions

      palindromeWithChaining = () => {
        let str = 'A man a plan a canal Panama';
        let leftCounter = str.toLowerCase().replace(/ /g, '');
        let rightCounter = leftCounter.split('').reverse().join('');
        return leftCounter === rightCounter;
      }

      palindromeWithChaining();

      ### check Palindrome with loop function 

      checkPalindromeWithLoop = () => {
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
    "id": "binarySearch",
    "label": "Binary Search",
    "content": `
      binarySearch = (list, target) => {
        let array = list.sort((a,b) => a - b);
        let startIndex = 0;
        let endIndex = array.length - 1;
        
        // loop while help repeat search when not target not found  
        while(startIndex <= endIndex) {
          
          let middleIndex = Math.floor((startIndex + endIndex) / 2);
          
          if(target === array[middleIndex]) {
            return console.log("Target was found at index " + middleIndex + ' with number : ' + array[middleIndex]);
          }
          
          if(target > array[middleIndex]) { // search right side
            startIndex = middleIndex + 1;
          }else { // search left side
            endIndex = middleIndex - 1;
          }
        }
        
        console.log("Target value not found in array");
      }

      ### check Binary Search with array number

      const sortNumbers = [2, 8, 5, 9, 45, 13, 67, 99];
      binarySearch(sortNumbers, 5);

      ### check Binary Search with array string

      const sortedRainbow = ["blue", "green", "indigo", "orange", "red", "violet", "yellow"];
      binarySearch(sortedRainbow, "red");
    `
  },
  {
    "id": "findMissingNumber",
    "label": "Find Missing Number",
    "content": `
      ### Check missing number in array

      findMissingNumber = () => {
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

      findDuplicateNumbers = () => {
        var arrayNums = [1, 8, 1, 1, 4 , 4, 5, 9, 8, 3, 4, 6, 7, 2, 9];
        let sortArray = arrayNums.sort();
        let newArrays = [];
        for (let i = 0; i < sortArray.length; i++) {

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
