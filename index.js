// Your code here


function mapToNegativize(src) {
  let r = []
  src.forEach(item => {
    r.push(-1 * item)
  })
  return r
}

function mapToNoChange(src) {
  let r = []
  src.forEach(item => {
    r.push(item)
  })
  return r
}

function mapToDouble(src) {
  let r = []
  src.forEach(item => {
    r.push(2 * item)
  })
  return r
}

function mapToSquare(src) {
  let r = []
  src.forEach(item => {
    r.push(item * item)
  })
  return r
}

function reduceToTotal(src, startingPoint=0) {
  let total = startingPoint
  src.forEach(item=> {
    total = total + item
  })
  return total
}

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
  }
  return true
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (src[i]) return true
  }
  return false
}