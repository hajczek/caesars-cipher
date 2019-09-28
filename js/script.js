function convertToRoman(num) {
 
  let result = '';

  // symbols values: [1, 5, 10, 50, 100, 500, 1000];
  const symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

  // Length of given number
  let numLen = num.toString().split('');

  // Position of digit in a given number
  let num1 = Number(numLen[0]);
  let num2 = Number(numLen[1]);
  let num3 = Number(numLen[2]);
  let num4 = Number(numLen[3]);

  // Condition for number which has length 1
  if(numLen.length === 1){
    num < 4 ? result += symbols[0].repeat(num) : false;
    num == 4 ? result += symbols[0] + symbols[1] : false;
    num > 4 && num < 9 ? result += symbols[1] + symbols[0].repeat(num - 5): false;
    num == 9 ? result += symbols[0] + symbols[2] : false; 
  }

  // Condition for number which has length 2
  if(numLen.length === 2){
    num1 < 4 ? result += symbols[2].repeat(num1) : false;
    num1 == 4 ? result += symbols[2] + symbols[3] : false;
    num1 > 4 && num1 < 9 ? result += symbols[3] + symbols[2].repeat(num1 - 5) : false;
    num1 == 9 ? result += symbols[2] + symbols[4] : false;
    num2 < 4 ? result += symbols[0].repeat(num2) : false;
    num2 == 4 ? result += symbols[0] + symbols[1] : false;
    num2 > 4 && num2 < 9 ? result += symbols[1] + symbols[0].repeat(num2 - 5) : false;
    num2 == 9 ? result += symbols[0] + symbols[2] : false;
  }

  // Condition for number which has length 3
  if(numLen.length === 3){
    num1 < 4 ? result += symbols[4].repeat(num1) : false;
    num1 == 4 ? result += symbols[4] + symbols[5] : false;
    num1 > 4 && num1 < 9 ? result += symbols[5] + symbols[4].repeat(num1 - 5) : false;
    num1 == 9 ? result += symbols[4] + symbols[6] : false;
    num2 < 4 ? result += symbols[2].repeat(num2) : false;
    num2 == 4 ? result += symbols[2] + symbols[3] : false;
    num2 > 4 && num2 < 9 ? result += symbols[3] + symbols[2].repeat(num2 - 5) : false;
    num2 == 9 ? result += symbols[2] + symbols[4] : false;
    num3 > 0 && num3 < 4 ? result += symbols[0].repeat(num3) : false;
    num3 == 4 ? result += symbols[0] + symbols[1] : false;
    num3 > 4 && num3 < 9 ? result += symbols[1] + symbols[0].repeat(num3 - 5) : false;
    num3 == 9 ? result += symbols[0] + symbols[2] : false;
  }

  // Condition for number which has length 4
  if(numLen.length === 4){
    num1 < 4 ? result += symbols[6].repeat(num1) : false;
    num2 < 4 ? result += symbols[4].repeat(num2) : false;
    num2 === 4 ? result += symbols[4] + symbols[5] :  false;
    num2 > 4 && num2 < 9 ? result += symbols[5] + symbols[4].repeat(num2 - 5) : false;
    num2 == 9 ? result += symbols[4] + symbols[6] : false;
    num3 < 4 ? result += symbols[2].repeat(num3) : false;
    num3 === 4 ? result += symbols[2] + symbols[3] : false;
    num3 > 4 && num3 < 9 ? result += symbols[3] + symbols[2].repeat(num3 - 5) : false;
    num3 == 9 ? result += symbols[2] + symbols[4] : false;
    num4 < 4 ? result += symbols[0].repeat(num4) : false;
    num4 == 4 ? result += symbols[0] + symbols[1] : false;
    num4 > 4 && num4 < 9 ? result += symbols[1] + symbols[0].repeat(num4 - 5) : false;
    num4 == 9 ? result += symbols[0] + symbols[2] : false;
  }
  return result;
} 

convertToRoman(3990);