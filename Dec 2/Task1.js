const employees = [
    { id: 1, name: "Alice Johnson", position: "Manager", salary: 75000, performanceReview: "Excellent" },
    { id: 2, name: "Bob Smith", position: "Developer", salary: 50000, performanceReview: "Good" },
    { id: 3, name: "Charlie Davis", position: "Designer", salary: 45000, performanceReview: "Average" },
    { id: 4, name: "Diana Martin", position: "Manager", salary: 80000, performanceReview: "Excellent" },
    { id: 5, name: "Evan Wright", position: "Intern", salary: 20000, performanceReview: "Good" },
    { id: 6, name: "Fiona Clark", position: "Developer", salary: 55000, performanceReview: "Excellent" },
    { id: 7, name: "George King", position: "Developer", salary: 48000, performanceReview: "Average" },
    { id: 8, name: "Hannah Brown", position: "Designer", salary: 47000, performanceReview: "Good" },
    { id: 9, name: "Ian Scott", position: "Developer", salary: 60000, performanceReview: "Excellent" },
    { id: 10, name: "Jane Wilson", position: "Manager", salary: 90000, performanceReview: "Excellent" },
  ];

  //1.Filter employees who have a performanceReview of "Excellent" and a salary above $50,000.

   const filteredList = employees.filter(item => item.performanceReview === "Excellent" && item.salary > 50000);

   //2.From the filtered list, use map to extract and transform their names to be in uppercase and append "!!!" to each name.

   const onlyNames= filteredList.map(item => item.name.toUpperCase() +"!!!" );

   //3.Use find to get the first employee in the dataset with the position "Manager" and a performanceReview of "Excellent".

   const excellentManager = employees.find(item => item.position === "Manager" && item.performanceReview === "Excellent" );

   //4.Use reduce to calculate the total salary of all employees with the position "Developer".


   const developer = employees.filter(item => item.position === "Developer");

   function sum(total, item) {
    return total + item.salary;
  }
   const totalSalary = developer.reduce(sum ,0)

   //5.Filter employees with salaries greater than $45,000.

   const greaterFortyFive = employees.filter(item => item.salary > 45000)
   
   //6.Map to create a summary object for each employee: { name, position, salary }.


   const summary = employees.map(item => ({

                                name: item.name,
                                position: item.position,
                                salary: item.salary
    }));

  //7.Write a function that takes an employee's name and returns it in reverse order. Apply this function to all employee names  using map

    const reversedNames = employees.map(employee => revName(employee.name));
    
    function revName(name) {
        return name.split("").reverse().join("");
    }


  
  
  


  console.log("Employees who have a performanceReview of Excellent and a salary above $50,000",filteredList);

  console.log("Uppercase names and !!!",onlyNames);

  console.log("First employee with the position Manager and a performanceReview of Excellent",excellentManager);

  console.log("Total salary of all employees with the position Developer",totalSalary);

  console.log("Employees with salaries greater than $45,000." ,greaterFortyFive);

  console.log("Summary Object" ,summary);

  console.log("Reversed Names:", reversedNames);
  
  
  