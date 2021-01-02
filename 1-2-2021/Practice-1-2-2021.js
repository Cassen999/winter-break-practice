function numberToString(num) {
    return num.toString()
}

console.log(numberToString(999))



function filter_list(l) {
    newArray = []
    for (let i = 0; i < l.length; i++) {
        if (l[i] >= 0 && Number.isFinite(l[i]) === true){
        newArray.push(l[i])
        }
    }
    return newArray
}

console.log(filter_list([1,2,'aasf','1','123',123]))
// Output '[1, 2, 123]'
console.log(filter_list([1,'a','b',0,15]))
// Output '[1, 0, 15]'
console.log(filter_list([1,2,'a','b']))
// Output '[1, 2]'



function usdcny(usd) {
    let conversion = usd * 6.75
    return conversion.toFixed(2) + ' Chinese Yuan'
}

console.log(usdcny(15))
console.log(usdcny(465))



// I was unable to get this one so instead I am going try to work through the answer
// The original answer set i < n-3 in the loop, this didn't make sense to me so after 
// some testing, I learned that the -3 was not necessary, so I changed it to i <= n
// because n is the amount of digits to end the sequence on so writing <= made sense
// to me and worked in all the test numbers that codewars tested with
function tribonacci(signature,n){  
    for (let i = 0; i <= n; i++) { // Iterate through signature, set i to always be less than 
        // or = to n
        // n is the amount of numbers to stop the sequence at so the sequence will stop when it 
        // is = n digits
      signature.push(signature[i] + signature[i+1] + signature[i+2]); // This is adding three
      // consecutive index values to create the next number in the sequence
    }
    return signature.slice(0, n); // The slice method is telling the function to begin the
    // function at 0, and carry out the function until the value of n as the index occurs
}

console.log(tribonacci([3,2,1],10))
// The function with these values will do this: 
// 3 + 2 + 1 = 6
// The returned array now looks like [3, 2, 1, 6]
// Then, the array will do 2 + 1 + 6 = 9
// The new returned array looks like [3, 2, 1, 6, 9]
// This happens 5 more times until there are n(10) values
// The final array returned will be [3,2,1,6,9,16,31,56,103,190]