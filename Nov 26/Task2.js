/*Write a function that takes a score (0-100) and returns a letter grade based on the score.
eg(100 - 90 - A , 90-80 - B , 80-70-C , etc…, 60 -0 - F ).*/

function grade(value) {
    if(!value ){
        
        console.log("invalid");
        return
        
    }
    if (value >= 90 && value <= 100) {
        console.log("Grade = A");
    } else if (value >= 80 && value < 90) {
        console.log("Grade = B");
    } else if (value >= 70 && value < 80) {
        console.log("Grade = C");
    } else if (value >= 60 && value < 70) {
        console.log("Grade = D");
    } else {
        console.log("Grade = F");  
    }
}

grade(95); 
grade(83); 
grade(75); 
grade(62);
grade(55);  
grade(0);
grade();

