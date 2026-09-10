import { container } from "../config/container";
import { ICalculatorService } from "./services/interfaces/calculator.interface";
import { PersonService } from "./services/person.service";

const calculatorService = container.resolve<ICalculatorService>("calculatorService");
const personService = container.resolve<PersonService>("personService");

async function main(){
    const result = await calculatorService.add(5, 10);
    console.log("Result:", result);

    const result2 = await calculatorService.subtract(11, 10);
    console.log("Result:", result2);

    const result3 = await calculatorService.multiply(11, 10);
    console.log("Result:", result3);

    const result4 = await calculatorService.divide(10, 2);
    console.log("Result:", result4);
    
    const person = await personService.create("Jhon", "Doe", 25);
    console.log("Person:", person);
}
main();