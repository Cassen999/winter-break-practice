function betterThanAverage(classPoints, yourPoints) {
    let total = 0
    for (let i = 0; i < classPoints.length; i++) {
        total += classPoints[i]
    }
    let classAverage = total / classPoints.length
    if(classAverage < yourPoints) {
        return true
    }
    else {
        return false
    }
}

console.log()