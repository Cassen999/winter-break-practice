function squareSum(numbers){
    let summed = 0;
      for (let i = 0; i < numbers.length; i++) {
        summed += numbers[i] * numbers[i]
      }
    return summed
  }

squareSum([1,2], 5);
squareSum([0, 3, 4, 5], 50);

function numberToString(num) {
// Return a string of the number here!
return num.toString()
}

numberToString(123); // returns '123';`   
numberToString(999); // returns '999';`



// Object to practice with
const items = [
    {name: 'Bike',      price: 100},
    {name: 'TV',        price: 200},
    {name: 'Album',     price: 10},
    {name: 'Book',      price: 5},
    {name: 'Phone',     price: 500},
    {name: 'Computer',  price: 1000},
    {name: 'Keyboard',  price: 25}
]

// .filter()
// Takes one parameter (taco)
// Does not mutate original object
// Get all items that cost less than 100
const filteredItems = items.filter((item) => {
    return item.price <= 100
})

console.log(filteredItems)
//output
[
    { name: 'Bike', price: 100 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Keyboard', price: 25 }
  ]

  // .find()
  // Same syntax as .filter()
  // Returns first item found that meets requirements
  // Get item with the name TV
  // Get item with the price of 1000
const foundItems = items.find((item) => {
    return item.name === 'TV'
})

const foundItems = items.find((item) => {
    return item.price === 1000
})
// output
[{ name: 'TV', price: 200 }]
[{ name: 'Computer', price: 1000 }]

// forEach
// Doesn't return anything
// Gets all items with matching parameters
items.forEach((item) => {
    console.log(item.name)
})
// output
Bike
TV
Album
Book
Phone
Computer
Keyboard

// some()
// Checks if ANY item in the array meets the criteria and returns
// true or false
const hasABook = items.some((item) => {
    return item.name === 'Book'
})
// output
true

// every()
// Similar to some() but checks if EVERY item in the array
// meets the criteria and returns true or false
const hasABook = items.every((item) => {
    return item.name === 'Book'
})
// output
false // Because only one item has the name of 'Book'

// .reduce()
// Runs a function on all items in the array
// Takes 2 parameters
// currentTotal is the total of the PREVIOUS value in the array
// The second parameter is the starting point for the function (0), it
// gets passed as the first currentTotal
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
// output
// 0 + 100, 100 + 200, 300 + 10, etc
1840

// .includes()
// Checks to see if an array contains specified value
const newItems = [1, 2, 3, 4, 5]
const includesTwo = newItems(2)
// output
true
const includesSeven = newItems(7)
// output
false // newItems does not include a 7