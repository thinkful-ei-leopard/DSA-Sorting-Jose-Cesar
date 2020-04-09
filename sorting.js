// drill 1

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left); // second call inserts left chunck into mergeSort and splits that left chunck into a left and right chunk
    right = mergeSort(right);
    return merge(left, right, array);
};


//part 1
// first recursive call:
// 21, 1, 26, 45, 29, 28, 2, 9 | 16, 49, 39, 27, 43, 34, 46, 40

//second recursive call:
// 21, 1, 26, 45 | 29, 28, 2, 9

// third recursive call:
// 21, 1 | 26, 45


// part 3
// first lists to be sorted: 21 | 1 => 1,21
// two lists to be merged on 7th  merge:
//1, 21, 26, 45 | 2, 9, 28, 29