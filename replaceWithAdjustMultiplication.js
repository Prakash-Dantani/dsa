const updateArray = (arr) => {
    let prev = 1;
    let next = null;
    var res = [];
    var arrLength = arr.length;
    for (var i = 0; i < arrLength; i++) {
        if (i > 0) {
            prev = arr[i - 1];
        }
        next = arr[i + 1];
        if (i == (arrLength - 1)) {
            next = 1;
        }
        res[i] = (parseInt(prev) * parseInt(arr[i]) * parseInt(next));
    }

    // Copy / replace updated values back to original array
    for (var i = 0; i < arrLength; i++) {
        arr[i] = res[i];
    }
    return arr;
}

/*Input: arr[] = [2, 4, 5]
Output: [8, 40, 20]
Explanation:
For index i = 0, arr[0] = 1 * arr[0] * arr[1] = 1 * 2 * 4 = 8
For index i = 1, arr[1] = arr[0] * arr[1] * arr[2] = 2 * 4 * 5 = 40
For index i = 2, arr[2] = arr[1] * arr[2] * 1 = 4 * 5 * 1 = 20
Thus, the updated array becomes [8, 40, 20].
*/

const res = updateArray([2, 4, 5]);
console.log(res);