// Your code here
const mapToNegativize = sourceArray => {
     let newArr = [];
     for (let el of sourceArray) {
          newArr.push(el * -1);
     }
     return newArr;
}

const mapToNoChange = sourceArray => {
     let newArr = [];
     for (let el of sourceArray) {
          newArr.push(el);
     }
     return newArr;
}

const mapToDouble = sourceArray => {
     let newArr = [];
     for (let el of sourceArray) {
          newArr.push(el * 2);
     }
     return newArr;
}

const mapToSquare = sourceArray => {
     let newArr = [];
     for (let el of sourceArray) {
          newArr.push(el * el);
     }
     return newArr;
}

const reduceToTotal = (sourceArray, startingPoint = 0) => {
     let total = startingPoint
     for (let el of sourceArray) {
          total += el;
     }
     return total;
}

const reduceToAllTrue = (sourceArray) => {
     return sourceArray.every(el => Boolean(el) === true)
}

const reduceToAnyTrue = (sourceArray) => {
     return sourceArray.includes(Boolean(true));
}


console.log(reduceToAllTrue([false, false, false, true]));