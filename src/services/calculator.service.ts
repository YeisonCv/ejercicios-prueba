import type { ICalculatorService } from './interfaces/calculator.interface';

export class CalculatorService implements ICalculatorService {
    async add(a: number, b: number): Promise<number> {
        return a + b;
    }
    async subtract(a: number, b: number): Promise<number> {
        return a - b;
    }
    async multiply(a: number, b: number): Promise<number> {
        return a * b;
    }
    async divide(a: number, b: number): Promise<number> {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}
