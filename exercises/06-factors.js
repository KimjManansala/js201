// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o
function factors(num){
    arrayFactor = []
    for(var i = 0; i <= num; i++){
        if((num % i) === 0){
            arrayFactor.push(i)
        }
    }
    return arrayFactor
}