// Your code here
function mapToNegativize (sourceArray) {
  let newArray = []
  newArray.push(sourceArray * (-1))
  return newArray;
}
mapToNegativize([1, 2, 3, -9])

function mapToNoChange(sourceArray){
  let newArray = []
  newArray.push(sourceArray)
  return newArray
}

function mapToDouble(sourceArray){
  let newArray = []
  newArray.push(sourceArray * 2)
  return newArray
}

function mapToSquare(sourceArray){
  let newArray = []
  newArray.push(sourceArray * sourceArray)
  return newArray
}


function reduceToTotal(sourceArray, startingPoint){
  return sourceArray.value + startingPoint.value
}

function reduceToAllTrue(sourceArray){
  
}

function reduceToAnyTrue(sourceArray){
  
}