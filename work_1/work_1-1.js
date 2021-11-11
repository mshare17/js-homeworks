const vowels = ["а","у","о","ы","э","я","ю","ё","и","е"]

function getIsVowel(char = '') {
    let result = false;
    
    for (let i = 0; i < vowels.length; i = i + 1) {
      if (vowels[i] === char) {
        result = true;
        break;
      }
    }
    
    return result;
  } 
  
  function getVowels(someString = '') {
    let result = ""
  
    for (let i = 0; i < someString.length; i = i + 1) {
      if (getIsVowel(someString[i])) {
        result = result + someString[i];
      }
    }
    
    return result;
  }

// Решение
const string = "Привет! Как дела?";
console.log(getVowels(string));