// Your code here
let mapToNegativize = (sourceArray) => {
        let thisNum = -1
        return sourceArray.map(num => num * thisNum)
    // for (let i = 0; i < sourceArray.length; i++) {
    //     if (sourceArray[i] <= 1){
    //         return sourceArray[i] * thisNum
    //     }
    // }
} 

const mapToNoChange = (sourceArray) => {
    const iterator = sourceArray.map(function(name){
        return name
    })      
}

// for (const value of iterator) {
//     return value
// }
    // let arr = sourceArray.map(function(name) {
    //     let arr2 = []
    //     for (let i = 0; i < sourceArray.length; i++) {
    //         return arr2.push(name[i] + 1)
    //     }
    // })
    // return arr
