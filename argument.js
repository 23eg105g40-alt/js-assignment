// write a function that receives marks array as argument and return small element
function findSmallestMark(marks){
    let smallest=marks[0];          

    for(let i=1;i<marks.length;i++){
        if(marks[i]<smallest){
            smallest=marks[i];
        }                               
    }
    return smallest;
}                           
let marksArray=[90,89,78,56,45,23,67];
let smallestMark=findSmallestMark(marksArray);
console.log(smallestMark);  
