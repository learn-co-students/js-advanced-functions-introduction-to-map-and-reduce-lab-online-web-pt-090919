// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(x => x * -1)
};

function mapToNoChange(sourceArray) {
    return sourceArray.map(x => x)
};

function mapToDouble(sourceArray) {
    return sourceArray.map(x => x * 2)
};

function mapToSquare(sourceArray) {
    return sourceArray.map(x => x * x)
};

function batteries(total, element){
    return element + total;
};

function reduceToTotal(sourceArray, startingPoint=0) {
    let boo = startingPoint + sourceArray.reduce(batteries);
    return boo
};

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) {
            return false
        }
      }
      return true
};

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            return true
        }
      }
      return false
};