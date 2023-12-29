export class FizzBuzz {
    public readonly numbers: number[];
    constructor() {
        this.numbers = this.createNumbers();
    }

    public checkFizzBuzz(number: number): string | null {
        const isDivisableBy3 = this.checkIfANumberIsDividedByOther(number, 3);
        const isDivisableBy5 = this.checkIfANumberIsDividedByOther(number,5);
        const isDivisableBy3And5 = isDivisableBy3 && isDivisableBy5;

        if(isDivisableBy3And5){
            return "FizzBuzz";
        }
        if(isDivisableBy3){
            return "Fizz";
        }
        if(isDivisableBy5){
            return "Buzz";
        }
        return null;
    }

    private createNumbers(): number[]{
        var numbers: number[] = [];
        for (var i = 1; i <= 100; i++) {
            numbers.push(i);
        }
        return numbers;
    }

    public printNumbers():void {
        this.numbers.forEach(number => {
            console.log(`${number}`);
        });
    }


    public checkFizzBuzzForAllNumbers(): void {
        const resultHM: any = {};
        this.numbers.forEach((number) => {
            const result =  this.checkFizzBuzz(number);
            resultHM[number] = result;
        });
        console.log(resultHM);
    }

    private checkIfANumberIsDividedByOther(number: number, dividedBy: number): boolean {
        return number % dividedBy === 0;
    }
}