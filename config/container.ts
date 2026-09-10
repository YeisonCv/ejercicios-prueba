import {} from "awilix";

import { asClass, asFunction, asValue, createContainer, InjectionMode } from "awilix";
import { CalculatorService } from "../src/services/calculator.service";
import { PersonService } from "../src/services/person.service";

export const container = createContainer({
    injectionMode: InjectionMode.CLASSIC
});

container.register({
    calculatorService: asClass(CalculatorService).singleton(),
    personService: asClass(PersonService).singleton()
});