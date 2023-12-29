import { FizzBuzz } from "../fizzbuzz/fizzbuzz";

describe("FizzBuzz", () => {
    it("Create a FuzzBuzz Object", () => {
        var fizzBuzz = new FizzBuzz();
        expect(fizzBuzz).toBeDefined();
        expect(fizzBuzz.numbers).toHaveLength(100);
    });

    it("Should return fizz when a number is divisible by 3 and null is it doesnt", () => {
        var fizzBuzz = new FizzBuzz();
        const result = fizzBuzz.checkFizzBuzz(3);
        expect(result).toEqual("Fizz");
        const result2 = fizzBuzz.checkFizzBuzz(1);
        expect(result2).toBeNull();
    });

    it("Should return Buzz when a number is divible by 5", () => {
        var fizzBuzz = new FizzBuzz();
        const result = fizzBuzz.checkFizzBuzz(5);
        expect(result).toEqual("Buzz");
    });
    it("Should return FizzBuzz when a number is divible by 5 and 3", () => {
        var fizzBuzz = new FizzBuzz();
        const result = fizzBuzz.checkFizzBuzz(15);
        expect(result).toEqual("FizzBuzz");
    });

    it("Should check fizzbuzz for all numbers", () => {
        var fizzBuzz = new FizzBuzz();
        const spy = jest.spyOn(console, 'log');
        fizzBuzz.checkFizzBuzzForAllNumbers();
        expect(spy).toHaveBeenCalled();
    });

});