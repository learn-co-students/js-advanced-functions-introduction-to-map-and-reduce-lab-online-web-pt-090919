// Your code here

function mapToNegativize(sourceArray) {
    return sourceArray.map(x => -1*x);
};

function mapToNoChange(sourceArray) {
    return sourceArray.map(x => x);
};

function mapToDouble(sourceArray) {
    return sourceArray.map(x => x*2);
};

function mapToSquare(sourceArray) {
    return sourceArray.map(x => x**2);
};

function reduceToTotal(sourceArray, start=0) {
    return sourceArray.reduce((x,y) => x+y, start);
};

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce((x,y) => !!x && !!y);
};

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce((x,y) => !!x || !!y);
};