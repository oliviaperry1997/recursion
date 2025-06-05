#!/usr/bin/node

function fibs(num) {
    let fibsequence = [0, 1];
    for (let i = 2; i < num; i++) {
        let fibsum = fibsequence[i-1] + fibsequence[i-2];
        fibsequence.push(fibsum);
    }
    console.log(fibsequence);
}

function fibsRec(num) {
    if (num === 1) {
        return [0]
    } else if (num === 2) {
        return [0, 1]
    } else {
        const seq = fibsRec(num - 1);
        const nextFib = seq[seq.length - 1] + seq[seq.length - 2];
        return [...seq, nextFib];
    }
}

fibs(8)
console.log(fibsRec(8))

function mergeSort(array) {

    if (array.length === 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle);

    const sortedLeft = mergeSort(leftArray);
    const sortedRight = mergeSort(rightArray);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return result.concat(left, right);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]))