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

// function swap(array, i, j) {
//     const tmp = array[i];
//     array[i] = array[j];
//     array[j] = tmp;
// };

// function partition(array, start, end) {
//     const pivot = array[end - 1];
//     let j = start;
//     for (let i = start; i < end - 1; i++) {
//         if (array[i] <= pivot) {
//             swap(array, i, j);
//             j++;
//         }
//     }
//     swap(array, end-1, j);
//     return j;
// };

// function quickSort(array, start = 0, end = array.length) {
//     if (start >= end) {
//         return array;
//     }
//     const middle = partition(array, start, end);
//     array = quickSort(array, start, middle);
//     array = quickSort(array, middle + 1, end);
//     return array;
// };



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
let data = `89 30 25 32 72 70 51 42 25 24 53 55 78 50 
13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 
98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 
81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 
69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 
51 54 84 34 53 78 40 14 5`.split(' ').filter(item => item !== ' ').map(item => Number(item))

console.log(data)

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

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

console.log(quickSort(data))