let price=1200;
let label;
if(price<500){
    label='Budget Course'
}else if(price>=500 && price<1000){
    label='Standard Course'
}else if(price>1000){
    label='Premium Course'
}
console.log(label);
