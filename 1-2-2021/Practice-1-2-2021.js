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