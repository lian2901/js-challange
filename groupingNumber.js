// Create row of numbers from 0 to 1000. Then group that numbers by:

//     even,
//     odd,
//     numbers multiplies by 5,
//     prime numbers, and
//     prime numbers less than 100.
function range(a, b) {
  return Array.from({ length: b - a + 1 }, (_, i) => i + a);
}
const numbers = range(0, 100);

const even = numbers.filter((number) => number % 2 === 0); 
const odd = numbers.filter((number) => number % 2 !== 0);
const multy5= numbers.filter((number) => number % 5 === 0);
const prime = numbers.filter((number) => {
     if (number < 2) return false;
     for (let i = 2; i < number; i++) {
       if (number % i === 0) return false;
     }
     return true;
   });
console.log(prime);