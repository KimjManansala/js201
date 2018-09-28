// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13
function sumNumbers (nums){
    sum = 0
    for( var i = 0; i <nums.length; i++){
        sum +=nums[i]
    }
    return sum
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positiveNumbers" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positiveNumbers([1, -3, 5, -3, 0]) --> [1, 5, 0]
// positiveNumbers([1, 2, 3]) --> [1, 2, 3]
// positiveNumbers([-1, -2, -3]) --> []
function positiveNumbers (nums){
    posNums = []
    for( var i = 0; i <nums.length; i++){
        if(nums[i] >= 0){
            posNums.push(nums[i])
        }
    }
    return posNums
}
console.log(positiveNumbers([1, -3, 5, -3, 0]))
console.log(positiveNumbers([1, 2, 3]))
console.log(positiveNumbers([-1, -2, -3]))