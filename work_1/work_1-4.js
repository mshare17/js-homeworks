const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = (num) => num % 2 ? false : true;

const filterArray = (numArray, isEvenFn) => {
    if (!Array.isArray(numArray) || (isEvenFn instanceof Function === false)) {
        return [];
    }

    let evenArray = [];

    for (let i = 0; i < numArray.length; i++) {
        if (isEvenFn(numArray[i])) {
            evenArray.push(numArray[i]);
        }
    }

    return evenArray;
}

console.log(filterArray(mixedArray, isEven));

