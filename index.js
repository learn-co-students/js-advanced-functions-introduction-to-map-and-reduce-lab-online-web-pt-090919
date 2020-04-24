// Your code here
function mapToNegativize(array){
  const numbers = [];
  
  array.forEach(function(num){
    numbers.push(num * -1);
  });
  return numbers;
}

function mapToNoChange(array){
  const numbers = [];
  
  array.forEach(function(num){
    numbers.push(num);
  });
  return numbers;
}

function mapToDouble(array){
  const numbers = [];
  
  array.forEach(function(num){
    numbers.push(num * 2);
  });
  return numbers;
}

function mapToSquare(array){
  const numbers = [];
  
  array.forEach(function(num){
    numbers.push(num * num);
  });
  return numbers;
}

function reduceToTotal(array, startingPoint=0){
  let numbers = startingPoint;
  
  array.forEach(function(num){
    numbers += num;
  });
  return numbers;
}

function reduceToAllTrue(num) {
    for (let i = 0; i < num.length; i++) {
        if (!num[i]) return false
    }
    return true
}

function reduceToAnyTrue(num) {
    for (let i = 0; i < num.length; i++) {
        if (num[i]) return true
    }
    return false
}
