const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Tech", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Tech", start: 1981, end: 2003},
    {name: "Company Nine", category: "Retail", start: 1981, end: 2003}
]

function makeNegative(num) {
    if (num < 0) {
      return num
    }
    else{
      return -num
    }
  }

function getSum( a,b ) {
    let sum = 0
    if (a > b) {
    for (let i = b; i < a + 1; i++) {
        sum += i
        }
    } 
    else if (a < b) {
        for (let i = a; i < b + 1; i++) {
            sum += i
        }
    }
    else if (a === b) {
        return a
    }
  console.log(sum)
  return sum
}