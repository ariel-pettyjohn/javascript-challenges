function forSum (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function whileSum (array) {
    let index = 0; 
    let sum   = 0;
    while (index < array.length) {
        sum += array[index]; 
        index++;
    }
    return sum;
}

function reduceSum (array) {
    const sum = array.reduce((currentValue, total) => currentValue + total);
    return sum;
}

module.exports = { forSum, whileSum, reduceSum };