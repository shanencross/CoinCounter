export default function coinCounter(money) {
    //how many in 1 dlrs
    // const cents = money * 100;
    // const quarters = (money/25);
    // const dimes = (money)
    // const nickels = 
    // const pennies =

    let coins = {
        "quarters": 0,
        "dimes": 0,
        "nickels": 0,
        "pennies": 0
    }

    if (isNaN(money) || money < 0) {
        return;
    }
    if (money === 0 ) {
        return coins;
    }
    else {
        console.log(money);
        let numberOfQuarters = money / 4;
        let moneyLeftOver = money % 4;
        let moneyToSubtract = 0.1;
        return coinCounter(money - moneyToSubtract);
    }
}

//4.99
//quarters = 19
//Dimes = 2
//Nikels = 0
//Penny = 4 

// 1 
// quarters = 4

//2.71
// quarters = 10 
// dimes = 2
// Nikels = 0
//Penny = 1

// 1 - Subtract quarters from money then return itself with new value, then subtract 
// base case is 0 cents left. Function stop 