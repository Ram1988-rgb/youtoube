//Create an Array of only even numbers from the above array
const array_number = Array(100);
const data = Array.apply(null, array_number)
  .map(function(val, index) { 
    return index+1;
  });   	
const even_array = data.filter(number => number % 2 == 0);
console.log( even_array);
