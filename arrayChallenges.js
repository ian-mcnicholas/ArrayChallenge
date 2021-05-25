
//1
// Food = yummy
// Number = I'm hungry


function alwaysHungry(arr) {
    for (var i = 0; i < arr.length; i++) {
        var foodcount = 0;
        if (arr[i] == "food") {
            console.log("yummy")
            foodcount++
        }
    }
    if (foodcount < 1) {
        console.log("I'm Hungry")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


//2
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i])
            console.log(filteredArr)
        }
    }
    console.log(filteredArr)
    return filteredArr;
    
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//3
//find avreage
//return count of numbers > average
function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;
    var avg = 0;
    for(var i=0; i<arr.length; i++){
        sum = sum + (arr[i])
    }
    // Average
    avg = sum / arr.length;
    // console.log(avg)
    for (var i=0; i<arr.length; i++){
        if((arr[i]) > avg){
            count++;
        }
    }
    console.log(count)
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


///4

function reverse(arr) {
    arr.reverse()
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// 5
// Add first 2 numbers of set
// push answer to array 
//shift over on repeat limit from n 
function fibonacciArray(n) {
    var fibArr = [0,1];
        for(var i = 0; i < n-2; i++){
            fibArr.push(fibArr[i]+ fibArr[i+1])
    }
    return fibArr;
    }
    
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


