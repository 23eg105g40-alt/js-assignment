// Marks are stored subject-wise for a student.
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
//Calculate total marks
let totalMarks = 0;
for (let subject in marks) {
  totalMarks += marks[subject];
}
console.log("Total Marks:", totalMarks);
//Calculate average marks
let averageMarks = totalMarks / Object.keys(marks).length;
console.log("Average Marks:", averageMarks);    
//Find the highest scoring subject
let highestSubject = '';
let highestMarks = 0;
for (let subject in marks) {
  if (marks[subject] > highestMarks) {  

    highestMarks = marks[subject];
    highestSubject = subject;
  }
}
console.log("Highest Scoring Subject:", highestSubject, "with marks:", highestMarks);
//Add a new subject computer: 90
marks.computer = 90;
console.log("Updated Marks:", marks);
