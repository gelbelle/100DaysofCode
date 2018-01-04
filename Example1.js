/*Sets bank account amount and determines if you have 
enough to buy a phone based on the price of the phone
and if you have enough to buy a case. */

//let bankBalance = prompt("What is your bank balance?");
//let spendAmount = prompt("How much are you willing to spend?");
const PHONE_COST = 99.99;
const CASE_COST = 9.99;
var preTaxCost = 0;
var withTaxCost = 0;
let counter = 0;
const TAX = 1.12;

//TEMP
let bankBalance = 302.19;
let spendAmount = 200;

function printAmount(amount) {
    return "$" + calcTax(amount).toFixed(2);
}

function calcTax(cost) {
    return cost * TAX;
}

while (preTaxCost < bankBalance) {
    preTaxCost += PHONE_COST;

    if (spendAmount > calcTax(withTaxCost)) {
        preTaxCost += CASE_COST;
    }
}

if (calcTax(preTaxCost) > bankBalance) {
    console.log("I'm sorry, you can't afford all of this. Your total is " + printAmount(preTaxCost) + ".");
    // printAmount(preTaxCost);
} else {
    console.log("Your total is " + printAmount(preTaxCost) + ".");
}