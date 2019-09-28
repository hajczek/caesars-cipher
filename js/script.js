function rot13(str) {
  
  // An empty array for result
  let result = [];

  // 'For loop' throught letters of str
  for(let i = 0; i < str.length; i++){

    // Check if letter has smallest charCode than 64
    if(str.charCodeAt(i) < 64) {

      // If 'yes' put letter in 'result' array
      result.push(str[i]);

      // Check if letter has biggest charCode than 64 and smallest than 78
    } else if(str.charCodeAt(i) > 64 && str.charCodeAt(i) < 78) {

      // If 'yes' add to this letter charCode 13 and push to 'result' array
      result.push(String.fromCharCode(str.charCodeAt(i) + 13));

      // Check if letter has biggest charCode than 77 and smallest than 91
    } else if(str.charCodeAt(i) > 77 && str.charCodeAt(i) < 91){

      // If 'yes' subtract from this letter charCode 13 and push to 'result' array
      result.push(String.fromCharCode(str.charCodeAt(i) - 13));

    }
  }
  // Return string from 'result' array without ','
  return result.toString().replace(/,/g, '');
}

// Test code
rot13("SERR PBQR PNZC");