// Your code here
const mapToNegativize = (sourceArray) => {
        let arr = []
        for(let num of sourceArray) {
            arr.push(num = num * -1)
        }
        return arr
} 

const mapToNoChange = (sourceArray) => {
    const newArr = []
    for(let i = 0; i < sourceArray.length; i++) {
	     newArr.push(sourceArray[i])
    }   
    return newArr  
}

const mapToDouble = (sourceArray) => {
    const newArr = []
    for(let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceArray[i] * 2)
    }
    return newArr
}

const mapToSquare = (sourceArray) => {
    const newArr = []
    for(let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceArray[i] ** 2)
    }
    return newArr
}


const reduceToTotal = (sourceArray, start = 0) => {
    let reducer = start
     for(let num of sourceArray){
         reducer = reducer + num
     }
     return reducer
}

const reduceToAllTrue = (sourceArray) => {
    let toTure = true
    for(let values of sourceArray) {
        if(values == false) {
            toTure = false
        }
    }
    return toTure 
}

const reduceToAnyTrue = (sourceArray) => {
    let toFalse = false
    for(let value of sourceArray) {
        if (value === true) {
            toFalse = true
        }
    }    
    return toFalse
}
