// Aim: The function takes a string as input, trims any leading or trailing whitespace, 
// converts the string to lowercase, replaces all spaces with hyphens (-), 
// and add "!!!" at the end before returning the final formatted string.



function Task1(input) {
  
    let trimmedString = input.trim();

   
    let lowercaseString = trimmedString.toLowerCase();

    
    let hyphenString = lowercaseString.replaceAll(" ", "-");

  
    let finalString = hyphenString + "!!!";

   
    return finalString;
}


let input = "  Hello World! JS is Fun  ";
let output = Task1(input); 
console.log(output);
