const largestWord = (arr) => {
    let longestStr = arr[0];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].length > longestStr.length) {
            longestStr = arr[index];
        }

    }
    return longestStr;
}

const arr = ["Apple", "Banana", "Mango", "Kiwi", "Orange"];
const res = largestWord(arr);
console.log(`Longest Word is : ${res}`); // Output is banana