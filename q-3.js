//Create a function that returns a Promise which returns the square of only even numbers and throws an error if an odd number is passed

const Square = async (num) => {
    return await new Promise((resolve, reject) => {
      // Succeed half of the time.
      if (num%2 == 0) {
        const sq= num *num
        resolve(sq)
      } else {
        const reason = new Error('number is odd');
        reject(reason);
      }
    })
  }
  
  Square(2).then(x => console.log(x) )
  .catch(e=> console.log(e));