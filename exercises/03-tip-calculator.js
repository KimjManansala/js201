// Write a function "tipAmount" that is given the bill amount and the level of
// service (one of good, fair and poor) and returns the dollar amount for the tip.
//
// Based on:
// good --> 20%
// fair --> 15%
// poor --> 10%
//
// Examples:
// tipAmount(100, 'good') --> 20
// tipAmount(40, 'fair') --> 6

function tipAmount (bill, tip){ //calculate the tip ammount
    if (tip === 'good'){
        return bill * .2    //will return 20% of bill
    }else if(tip === 'fair'){
        return bill * .15   //will return 15% of the bill
    }else if (tip === 'bad'){
        return bill *.1 //will return 10% of the bill
    }else{
        return bill //assuming user will not leave tip
    }

}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally
//
// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46
function totalAmount (bill, tip){   //function adding tipAmount to bill
    return bill + tipAmount(bill, tip)
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.
//
// Examples:
// splitAmount(100, 'good', 5) --> 24
// splitAmount(40, 'fair', 2) --> 23
function splitAmount (bill, tip, people){
    return (totalAmount(bill, tip) / people)
}
