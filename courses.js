//You are preparing a course list for display on a website
const courses = ["javascript", "react", "node", "mongodb", "express"];
// filter() courses with name length > 5
const longCourses = courses.filter(course => course.length > 5);
console.log("Courses with name length > 5:", longCourses);
//  map() to convert course names to uppercase
const upperCaseCourses = courses.map(course => course.toUpperCase());
console.log("Courses in uppercase:", upperCaseCourses); 
//reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
const courseString = courses.reduce((acc, course, index) => {
  if (index === 0) {
    return course.toUpperCase();
  } else {
    return acc + " | " + course.toUpperCase();
  }
}, "");
console.log("Course string:", courseString);
//find() the course "react"
const reactCourse = courses.find(course => course === "react");
console.log("Found course:", reactCourse);  
//findIndex() of "node"
const nodeIndex = courses.findIndex(course => course === "node");
console.log("Index of 'node':", nodeIndex);     
