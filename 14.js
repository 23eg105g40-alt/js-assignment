//You receive marks from an exam system.
const marks = [78, 92, 35, 88, 40, 67];
//filter() marks ≥ 40 (pass marks)
const passMarks = marks.filter(mark => mark >= 40);
console.log("Pass marks (≥ 40):", passMarks);
//map() to add 5 grace marks to each student
const graceMarks = marks.map(mark => mark + 5);
console.log("Marks after adding grace marks:", graceMarks); 
// reduce() to find highest mark
const highestMark = marks.reduce((acc, mark) => acc > mark ? acc : mark);
console.log("Highest mark:", highestMark);
//find() first mark below 40
const firstFailingMark = marks.find(mark => mark < 40);
console.log("First failing mark (< 40):", firstFailingMark);    
//findIndex() of mark 92
const index92 = marks.findIndex(mark => mark === 92);           
console.log("Index of mark 92:", index92);