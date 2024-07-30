let numbers = [1,2,3,4,5];
let display = numbers.map(doubleNumber);

console.log(display);

function doubleNumber (element){
  return element*2;
}