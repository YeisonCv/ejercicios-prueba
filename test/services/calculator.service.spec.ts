import {vi, describe, expect, test, it} from "vitest";
import { CalculatorService } from "../../src/services/calculator.service";

describe("CalculatorService", () => {

    it("should add two numbers correctly", async () => {
       const service = new CalculatorService();
        const a = 5;
        const b = 10;

        const result = await service.add(a, b);

        expect(result).toBe(15);

    })
    it("should subtract two numbers correctly", async () => {
        const service = new CalculatorService();
        const a = 10;
        const b = 5;

        const result2 = await service.subtract(a, b);

        expect(result2).toBe(5);
    });
    it("should multiply two numbers correctly", async () => {
        const service = new CalculatorService();
        const a = 5;
        const b = 10;

        const result3 = await service.multiply(a, b);

        expect(result3).toBe(50);
    });
    it("should divide two numbers correctly", async () => {
        const service = new CalculatorService();
        const a = 10;
        const b = 2;

        const result4 = await service.divide(a, b);

        expect(result4).toBe(5);
    });
    it("should throw an error when dividing by zero", async () => {
        const service = new CalculatorService();
        const a = 10;
        const b = 0;

        await expect(service.divide(a, b)).rejects.toThrow("Cannot divide by zero");

    });

});