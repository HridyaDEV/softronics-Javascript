//function that prints all odd numbers from 1 to n using a while loop.


function oddNumber(n) {
    let num = 1;
    while (num <= n) { 
        if (num % 2 == 1) {
            console.log(num); 
        }
        num++;
    }
}

oddNumber(20); 
