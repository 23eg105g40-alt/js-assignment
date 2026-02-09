let marks = [90,70,80,60,50];
//filter(selection)
marks.filter(function(element){
    return element<50  
})
//write a function that can extract marks > 70,pack them into an array and return the array
function extractHighMarks(marks){
    let highMarks=[];
    for(let i=0;i<marks.length;i++){
        if(marks[i]>70){
            highMarks.push(marks[i]);
        }
    }
    return highMarks;
}
let extractedMarks=extractHighMarks(marks);
console.log(extractedMarks);
//find all marks bewteen 50 and 80
function findMarksInRange(marks,min,max){
    let rangeMarks=[];
    for(let i=0;i<marks.length;i++){
        if(marks[i]>=min && marks[i]<=max){
            rangeMarks.push(marks[i]);
        }
    }
    return rangeMarks;
}   
let marksInRange=findMarksInRange(marks,50,80);
console.log(marksInRange);
//filter(selection)
//get marks <70
let result1=marks.filter(element=>element<70)
console.log(result1);
//map(modification / transformation)
// add 5 marks to each element
let result2=marks.map(element=>element+5)
console.log(result2);   
//reduce(aggregation)
