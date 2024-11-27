
// Aim: The function takes a string as input, removes all vowels (a, e, i, o, u),
// converts the remaining string to uppercase, and adds "!!!" at the end before returning the final result.



function Task2(input){
    let noVowel=input.replaceAll(/[aeiouAEIOU]/g,"");
    

    let uppercaseString = noVowel.toUpperCase();

    let finalString = uppercaseString + "!!!";

    return finalString;


    
}
let input="Java Script is amazing";
 let output=Task2(input);
 console.log(output);