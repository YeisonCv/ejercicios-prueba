export interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
    fullName: string;
}

export interface IPersonService {
    create(firstName: string, lastName: string, age: number): Promise<IPerson>;
}