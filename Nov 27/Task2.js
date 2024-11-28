// a program to count the number of vowels in a string using a for loop and if statement.

let string = "JavaScript is fun";
let vowelsCount = 0;

for (let i = 0; i <= string.length; i++) { 
    if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u" ||
        string[i] === "A" || string[i] === "E" || string[i] === "I" || string[i] === "O" || string[i] === "U")
         { 
        vowelsCount++;
    }
}

console.log(vowelsCount);

