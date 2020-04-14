// Your code here
function mapToNegativize(array) {
   let mapped = []
   for (let i = 0; i < array.length; i++) {
        mapped.push(array[i] * -1)
   }
   return mapped
}

function mapToNoChange(array) {
    let mapped = []
    for (let i = 0; i < array.length; i++) {
        mapped.push(array[i])
    }
    return mapped
}

function mapToDouble(array) {
    let mapped = []
    for (let i = 0; i < array.length; i++) {
        mapped.push(array[i] * 2)
    }
    return mapped
}

function mapToSquare(array) {
    let mapped = []
    for (let i = 0; i < array.length; i++) {
        mapped.push(array[i] ** 2)
    }
    return mapped
}

function reduceToTotal(array, start=0) {
    let total = start
    for (let i = 0; i < array.length; i++) {
        total = total + array[i]
    }
    return total
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) return false
    }
    return true
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) return true
    }
    return false
}