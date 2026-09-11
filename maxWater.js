const maxWater = (arr) => {
    let max_water = 0;
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let height = Math.min(arr[left], arr[right]);
        let width = right - left;

        if (arr[left] < arr[right]) {
            left++;
        } else {
            right--;
        }
        var water = height * width;
        max_water = Math.max(water, max_water);
    }
    return max_water;
}

console.log(maxWater([3, 1, 2, 4, 5]))