let fruits = ["apple","orange","banana","coconut"];

fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element,index,array){
  array[index] = element.toUpperCase();
}
function lowerCase(element,index,array){
    array[index] = element.toLowerCase();
  
}
function capitalize(element,index,array){
  array[index] = element.charAT(0).toUpperCase()+element.slice(1);

}

function display(element){
  console.log(element);
}
