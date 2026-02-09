//students
let students = [
    { sno:1,name:"ravi",age:21 },
    { sno:2,name:"raju",age:22 },
    { sno:3,name:"ram",age:20 },
    { sno:4,name:"ramesh",age:23 }, 
]
//find students age less than 20
let result=students.filter(studentObj=>studentObj.age>20)
console.log(result);
// increment age by 2 years for ram.
