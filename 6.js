let emp={
    eno:1,
    name:"ravi"
}
//Accessing props
console.log(emp.eno)//1
//Adding new property(dynamic)
emp.city='hyderabad'
//Update a property
emp.eno=123;
console.log(emp.city)
console.log(emp.eno)
//delete a prop
delete emp.name;
console.log(emp.name)
//freeze an object
Object.freeze(emp);