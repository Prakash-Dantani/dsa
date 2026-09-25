
function largest(arr) {
    let large = arr[0];
    if (arr.length == 1) return large;
    arr.map((value) => {
        if (large < value)
            large = value
    });
    return large;

}

const res = largest([1, 5, 3, 8, 10, 25, 5, 20]);
console.log(res);