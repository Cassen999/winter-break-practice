// The sum function will return the sum of two numbers
// Will attempt to convert to Number before adding.
const sum = (x, y) => {
  return Number(x) + Number(y);
}

console.log('*** Testing Sum:')
console.log(`sum(2, 4) expected: 6 , actual: `, sum(2, 4));
console.log(`sum(2.2, 4) expected: 6.2 , actual: `, sum(2.2, 4));
console.log(`sum(2, -4) expected: -2 , actual: `, sum(2, -4));
console.log(`sum('2', 4) expected: 6 , actual: `, sum('2', 4));