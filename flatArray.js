const flattenArray = (array) => {
    return array.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
    }, []);
};

const arr = [1, 2, [3, 4, 5], 6, 7, [8, 9, [10, 11]]];
console.log(flattenArray(arr));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
