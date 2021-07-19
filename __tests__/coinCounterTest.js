import coinCounter from "./../src/coinCounter.js"

describe("coinCounter", () => {
    test("$0 should have 0 coins of all kinds for change", () => {
        const testInput = 0;
        const expectedResult = {
            "quarters": 0,
            "dimes": 0,
            "nickels": 0,
            "pennies": 0,
        }
		expect(coinCounter(testInput)).toEqual(expectedResult);
	});

    test("Test for $4.99", () => {
        const testInput = 4.99;
        const expectedResult = {
            "quarters": 19,
            "dimes": 2,
            "nickels": 0,
            "pennies": 4,
        }
		expect(coinCounter(testInput)).toEqual(expectedResult);
	});
});