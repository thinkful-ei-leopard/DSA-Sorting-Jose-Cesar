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

// part 2
// list to be sorted : 9

// part 3
// first lists to be sorted: 21 | 1 => 1,21

// part 4
// two lists to be merged on 7th  merge:
//1, 21, 26, 45 | 2, 9, 28, 29


//drill 2 

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};



// part 1
// You partition the array into two halves around a pivot value.
// All the values which are less than the pivot value go to one half of the array
// and all of the values which are greater than the pivot go to the other half of 
// the array.

// Answer: 
// The pivot could have been either 14 or 17 because all of the values right of 14 are greater than
//14, and all the values left of 14 are smaller than 14. same goes for 17.
// 3 9 1 < 14 > < 17 > 24 22 20


// part 2
// [3, 9, 10, 12, 19, 14, 17, 16, 13, 15]
// [14, 13, 10, 3, 9, 12, 15, 16, 19, 17]

// drill 3