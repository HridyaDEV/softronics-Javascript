const students = [
    {
      id: 1,
      name: 'Alice',
      subjects: [
        { name: 'Math', score: 85 },
        { name: 'English', score: 78 }
      ]
    },
    {
      id: 2,
      name: 'Bob',
      subjects: [
        { name: 'Math', score: 65 },
        { name: 'English', score: 90 }
      ]
    },
    {
      id: 3,
      name: 'Charlie',
      subjects: [
        { name: 'Math', score: 92 },
        { name: 'English', score: 88 }
      ]
    },
    {
      id: 4,
      name: 'Diana',
      subjects: [
        { name: 'Math', score: 74 },
        { name: 'English', score: 82 },
        { name: 'Science', score: 91 }
      ]
    },
    {
      id: 5,
      name: 'Ethan',
      subjects: [
        { name: 'Math', score: 88 },
        { name: 'English', score: 76 },
        { name: 'History', score: 85 }
      ]
    }
  ];
  
  //1.Find the students who scored more than 80 in Math. Return an array of their names.

const studHighMathScores = students.filter(student => {
    
    const mathSubjects = student.subjects.filter(subject => subject.name === 'Math');

    for (let i = 0; i < mathSubjects.length; i++) {
      if (mathSubjects[i].score > 80) {
      
        return true;
      }
    }
    
    return false;
  })
 
  
  .map(student => student.name);

  /* 2.Create a new array of objects where each object contains the name of the
   student and their average score across all subjects.*/


   const studentAverage = students.map((student=>{
     const totalScore = student.subjects.reduce((sum, subject)=> sum + subject.score, 0);
     const averageScore = totalScore/student.subjects.length;

     return{
        name: student.name,
        averageScore: averageScore
     };

   }))
   //3.Calculate the total average score of all students in Math.

   let mathScores = [];


      students.forEach(student => {
 
        student.subjects
        .filter(subject => subject.name === 'Math') 
        .forEach(subject => mathScores.push(subject.score)); 
  });

const totalMathScore = mathScores.reduce((sum, score) => sum + score, 0);


const averageMathScore = totalMathScore / mathScores.length;

//4.Find the students who scored more than 80 in both Math and English. Return an array of their names.

const highStudentNames = students
  .filter(student => 
    student.subjects.some(subject => subject.name === 'Math' && subject.score > 80) && 
    student.subjects.some(subject => subject.name === 'English' && subject.score > 80)
  )
  .map(student => student.name);



  console.log("Students who scored more than 80 in Math - ", studHighMathScores);
  console.log("average score across all subjects",studentAverage);
  console.log("Total average score in Math:", averageMathScore);
  console.log("Students who scored more than 80 in both Math and English:", highStudentNames);
  
  
  