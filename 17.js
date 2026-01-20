 //Shallow Copy (Controlled Mutation Use Case)
// Given Data:
       //       const user = {
         //       id: 101,
           //     name: "Ravi",
             //   preferences: {
               //   theme: "dark",
                 // language: "en"
                //}
              //};

//Task
   // 1. Create a shallow copy of user
   // 2. Change:
     //     i. name in the copied object
       //   ii. preferences.theme in the copied object
         // iii .Log both original and copied objects
          //v. Observe what changes and what doesn’t
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
      theme: "dark",        
                language: "en"
            }
        };  
const copiedUser = {...user}; // Shallow Copy
copiedUser.name = "Amit";   
copiedUser.preferences.theme = "light";

console.log("Original User:", user);
console.log("Copied User:", copiedUser);    

