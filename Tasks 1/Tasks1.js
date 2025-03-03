// Accept a char input from the user and display it on the console.
const char = prompt("Enter a character")
console.log(char);
alert("charecter entered " + char)

// Accept two inputs from the user and output their sum.


const number1 = parseInt(prompt("Enter the first number (integer): "))
const number2 = parseFloat(prompt("Enter the second number (float): "))

const sum = number1 + number2;

console.log("The sum of the numbers is: " + sum);
alert("The sum of the numbers is: " + sum)


// 2. Write a program to find the simple interest.
// a.	Program should accept 3 inputs from the user and calculate simple interest for the given inputs. Formula: SI=(P*R*n)/100)
const principal = parseInt(prompt("Enter the Principal amount (integer): "))
const rate = parseFloat(prompt("Enter the Interest rate (float): "))
const years = parseFloat(prompt("Enter the Number of years (float): "))

const simpleInterest = (principal * rate * years) / 100

console.log("The Simple Interest is: ", simpleInterest);
alert("The Simple Interest is: " + simpleInterest)

//4. Write a program to check whether a student has passed or failed in a subject after he    or she enters their mark (pass mark for a subject is 50 out of 100).
//a.	Program should accept an input from the user and output a message as “Passed” or “Failed”

const mark = parseFloat((prompt("Enter the mark : ")))

if (mark >= 50) {
    alert("Pass")

}
else {
    alert("Failed")
}


// 5. Write a program to show the grade obtained by a student after he/she enters their total mark percentage.
// a.	Program should accept an input from the user and display their grade as follows


const totalMark = parseFloat(prompt("Enter your total mark :"))

let grade;
if (totalMark > 90) {
    grade = "A"
} else if (totalMark >= 80) {
    grade = "B"
} else if (totalMark >= 70) {
    grade = "C"
} else if (totalMark >= 60) {
    grade = "D"
} else if (totalMark >= 50) {
    grade = "E"
} else {
    grade = "Failed"
}

console.log("Your grade is: " + grade)
alert("Your grade is: " + grade)

// 6. Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows. 


let dayNumber = parseInt(prompt("Enter the number:"))

let day;
switch (dayNumber) {
    case 1:
        day = "Sunday"
        break
    case 2:
        day = "Monday"
        break
    case 3:
        day = "Tuesday"
        break
    case 4:
        day = "Wednesday"
        break
    case 5:
        day = "Thursday"
        break;
    case 6:
        day = "Friday"
        break;
    case 7:
        day = "Saturday"
        break;
    default:
        day = "Invalid Entry"
}

console.log("The day is: " + day);
alert("The day is: " + day)

//7. Write a program to print the multiplication table of given numbers.
//a.	Accept an input from the user and display its multiplication table

let number = prompt("Enter a number:")

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${number} = ${i * number}`);
    alert(`${i} x ${number} = ${i * number}`)
}

// 8. Write a program to find the sum of all the odd numbers for a given limit
// a.	Program should accept an input as limit from the user and display the sum of all the odd numbers within that limit

let limit = prompt("Enter the limit:")


let oddSum = 0;

// Loop to find the sum of odd numbers
for (let i = 1; i <= limit; i += 2) {
    oddSum += i;
}

// Display the result
console.log(`The sum of all odd numbers up to ${limit} is: ${oddSum}`);
alert(`The oddSum of all odd numbers up to ${limit} is: ${oddSum}`)

// 9. Write a program to print the following pattern (hint: use nested loop)

// Accept input for the number of rows
let rows = prompt("Enter the number of rows:")

let pattern = "";

for (let i = 1; i <= rows; i++) {

    for (let j = 1; j <= i; j++) {
        pattern += j + " "
    }
    pattern += "\n"
}

console.log(pattern);
alert(pattern)

//10. Write a program to interchange the values of two arrays.
// a.	Program should accept an array from the user, swap the values of two arrays and display it on the console

let size = prompt("Enter the size of the arrays:")

let array1 = prompt("Enter the values of Array 1 (comma-separated):")
    .split(",")
    .map(Number);
let array2 = prompt("Enter the values of Array 2 (comma-separated):")
    .split(",")
    .map(Number);

let temp = array1;
array1 = array2;
array2 = temp;

console.log("Arrays after swapping:");
console.log("Array1: " + array1.join(", "));
console.log("Array2: " + array2.join(", "));

alert("Arrays after swapping:\nArray1: " + array1.join(", ") + "\nArray2: " + array2.join(", "))

//      11. Write a program to find the number of even numbers in an array
// a.	Program should accept an array and display the number of even numbers contained in that array

let input = prompt("Enter numbers separated by commas:")

let numbers = input.split(",").map(Number);

let evenCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenCount++;
    }
}
console.log("Number of even numbers :", evenCount);
alert("Number of even numbers : " + evenCount)


//       12. Write a program to sort an array in descending order
// a.	Program should accept and array, sort the array values in descending order and display it


    let num = prompt("Enter the values of the array (comma-separated):")
        .split(",") 
        .map(Number)

        num.sort((a, b) => b - a);
 
        console.log("Sorted array in descending order:");
        console.log(num.join(", "));

        alert("Sorted array in descending order:\n" + num.join(", "))
    
//13. Write a program to identify whether a string is a palindrome or not
// a.	A string is a palindrome if it reads the same backward or forward eg: MALAYALAM
// Program should accept a string and display whether the string is a palindrome or not

let str = prompt("Enter a string:")

let lowerStr = str.toLowerCase()

let reversedStr = lowerStr.split("").reverse().join("")

if (lowerStr === reversedStr) {
    console.log("The string is a palindrome.");
    alert("The string is a palindrome.")
} else {
    console.log("The string is NOT a palindrome.");
    alert("The string is NOT a palindrome.")
}
//14


//  15. Write a program to accept an array and display it on the console using functions
//a.	Program should contain 3 functions including main() function


function getArray() {
    let input = prompt("Enter numbers separated by commas:");
    return input.split(",")
}
function displayArray(array) {
    console.log("Array elements:", array.join(", "));
}

function main() {
    let array = getArray()
    displayArray(array)
}

main();



