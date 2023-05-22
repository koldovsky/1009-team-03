// Convert a string to an array
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
    return string.split(" ")

}

// DNA to RNA Conversion
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
    return dna.replaceAll('T', 'U');
}

function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U'); // Регулярні вирази, тобто всі T
}

// Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function (list) {
    return Math.min(list);
}

var max = function (list) {
    return Math.max(list);
}

// Smallest value of an array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
    var val = Math.min.apply(null, arr)
    return toReturn == 'value' ? val : arr.indexOf(val)
}

// ADVANCED
//A wolf in sheep's clothing
//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
    if (queue[queue.length - 1] === 'wolf') {
        return 'Pls go away and stop eating my sheep';
    } else {
        let index = queue.findIndex((x) => x == 'wolf');
        return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
    }
}

//Beginner - Lost Without a Map
//https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

function maps(x) {
    double_ls = []
    for (var i of x) {
        double_ls.push(i * 2);
    }
    return double_ls;
}


function maps(x) {
    return x.map(n => n * 2);
}

//Find the first non-consecutive number
//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] != arr[i] + 1) {
            return arr[i + 1];
        }
    }
    return null;
}