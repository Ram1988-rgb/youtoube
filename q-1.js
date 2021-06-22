//Create an Array from 0...100 without using traditional For-loop
const array_number = Array(100);
const data = Array.apply(null, array_number)
  .map(function(val, index) { 
    return index+1;
  });

console.log(data);