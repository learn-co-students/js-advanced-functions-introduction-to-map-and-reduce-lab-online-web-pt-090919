function mapToNegativize(array) {
  let n = []
  for (let i = 0; i < array.length; i++) {
      n.push(-1 * array[i])
  }   
  return n 
}

function mapToNoChange(array) {
  let n = []
  for (let i = 0; i < array.length; i++) {
      n.push(array[i])
  }
  return n
}

function mapToDouble(array) {
  let n = []
  for (let i = 0; i <array.length; i++) {
      n.push(2 * array[i])
  }
  return n
}

function mapToSquare(array) {
    let n = []
    for (let i = 0; i <array.length; i++) {
        n.push(array[i] * array[i])
    }
    return n
  }
  
  function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i]
    }
    return total
  }

  function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
      if (!sourceArray[i]) return false 
     }
    return true
  }

  function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
      if (sourceArray[i]) return true    
    }   
    return false
  }