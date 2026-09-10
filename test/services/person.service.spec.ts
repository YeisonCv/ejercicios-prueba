import {vi, describe, expect, test, it} from "vitest";
import { PersonService } from "../../src/services/person.service";

describe("PersonService", () => {

    it("should create a person correctly", async () => {
        const service = new PersonService();
        const firstName = "John";
        const lastName = "Doe";
        const age = 25;

        const result = await service.create(firstName, lastName, age);

        expect(result.firstName).toBe("John");
        expect(result.lastName).toBe("Doe");
        expect(result.age).toBe(25);
        expect(result.fullName).toBe("John Doe");
    });

    it("should throw an error when first name is empty", async () => {
        const service = new PersonService();
        const firstName = "";
        const lastName = "Doe";
        const age = 25;

        await expect(service.create(firstName, lastName, age)).rejects.toThrow("First name is required");
    });

    it("should throw an error when last name is empty", async () => {
        const service = new PersonService();
        const firstName = "John";
        const lastName = "";
        const age = 25;

        await expect(service.create(firstName, lastName, age)).rejects.toThrow("Last name is required");
    });

    it("should throw an error when first name has less than 3 characters", async () => {
        const service = new PersonService();
        const firstName = "Jo";
        const lastName = "Doe";
        const age = 25;

        await expect(service.create(firstName, lastName, age)).rejects.toThrow("First name must be at least 3 characters long");
    });

    it("should throw an error when person is underage", async () => {
        const service = new PersonService();
        const firstName = "John";
        const lastName = "Doe";
        const age = 17;

        await expect(service.create(firstName, lastName, age)).rejects.toThrow("Person must be of legal age");
    });

    it("should verify the generation of the full name", async () => {
        const service = new PersonService();
        const firstName = "Jane";
        const lastName = "Smith";
        const age = 30;

        const result = await service.create(firstName, lastName, age);

        expect(result.fullName).toBe(`${firstName} ${lastName}`);
    });

});