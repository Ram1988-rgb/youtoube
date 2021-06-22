//create an array of even squares using the previous array
const array_number = Array(100);
const data = Array.apply(null, array_number)
  .map(function(val, index) { 
    return index+1;
  });   	
const even_array = data.filter(number => number % 2 == 0);

let even_square = even_array.map(x=> x*x)
console.log(even_square)