function squareSum(numbers) {
    let squared = numbers.map((number) => {
      return number * number
    })
    let sum = 0
    for (let i = 0; i < squared.length; i++) {
      sum += squared[i]
    }
    return sum
  }

// OR

function squareSum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      let squared = numbers[i] * numbers[i]
      sum += squared
    }
    return sum
  }

console.log(squareSum([1,2]), 5)
console.log(squareSum([0, 3, 4, 5]), 50)