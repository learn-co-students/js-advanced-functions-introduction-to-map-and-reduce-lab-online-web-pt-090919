function mapToNegativize(sourceArray){ 
  return sourceArray.map(x => x*-1);
}

function mapToNoChange(sourceArray){
  return sourceArray;
}

function mapToDouble(sourceArray){
  return sourceArray.map(x => x*2);
}

function mapToSquare(sourceArray){
  return sourceArray.map(x => x**2);
}

// .reduce functions

function reduceToTotal(sourceArray, startingPoint = 0){
  const reduceNumber = function(startPoint, endPoint){
    return startPoint + endPoint
  }
  return sourceArray.reduce(reduceNumber, startingPoint);
}

function reduceToAllTrue(sourceArray){
  const reducer = function(a, c){
    if(!!a == true && !!c == true){
      return true
    } else {
      return false
    }
  }
  return sourceArray.reduce(reducer, true)
}

function reduceToAnyTrue(sourceArray){
  const reducer = function(a, c){
    if(!!a == true || !!c == true){
      return true
    } else {
      return !!c
    }
  }
  return sourceArray.reduce(reducer, false)
} 