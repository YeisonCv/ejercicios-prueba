import type { IPerson, IPersonService } from './interfaces/person.interface';

export class PersonService implements IPersonService {
    async create(firstName: string, lastName: string, age: number): Promise<IPerson> {
        if (!firstName || firstName.trim() === "") {
            throw new Error("First name is required");
        }
        if (!lastName || lastName.trim() === "") {
            throw new Error("Last name is required");
        }
        if (firstName.length < 3) {
            throw new Error("First name must be at least 3 characters long");
        }
        if (age < 18) {
            throw new Error("Person must be of legal age");
        }

        const fullName = `${firstName} ${lastName}`;

        return {
            firstName,
            lastName,
            age,
            fullName
        };
    }
}