/* 
write a function that receives "skills" array and "skillName" as arguments and return the index
if skillName existed,otherwise "Skill not found" */
let skills=['react','angular','nodejs','java'];
function findSkillIndex(skills,skillName){
    //business logic to check skillName in existed or not

    for(let i=0;i<skills.length;i++){
        if(skills[i]===skillName){
            return i; 
        }   
    }
    //call function
    return "Skill not found";
}   
let skillIndex=findSkillIndex(skills,'nodejs');
console.log(skillIndex);    

// create Student object with pros rollNo,name,age,city
// Create product obj with pros productName,brand,price
let student={ rollNo:1,name:'mukesh',age:22,city:'bangalore'};
let product={ productName:'iPhone',brand:'Apple',price:1200};
console.log(student);
console.log(product);   
