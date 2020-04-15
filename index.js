function mapToNegativize(array) {
    return array.map(x => x * -1)
}

function mapToNoChange(array) {
    return array.map(x => x)
}

function mapToDouble(array) {
    return array.map(x => x * 2)
}

function mapToSquare(array) {
    return array.map(x => x * x)
}

function reduceToTotal(array, currentValue = 0) {
    const reducer = function (a, b) {
        return a + b
    }
    return array.reduce(reducer, currentValue)
}

function reduceToAllTrue(array) {
    const reducer = function (a, b) {
        if (!!a === true && !!b === true) {
            return true
        } else {
            return false
        }
    }
    return array.reduce(reducer, true)
}

function reduceToAnyTrue(array) {
    const reducer = function (a, b) {
        if (a == true) {
            return true
        } else {
            return !!b
        }
    }
    return array.reduce(reducer, false)
}