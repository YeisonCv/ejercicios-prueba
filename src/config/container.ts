import {} from "awilix";

import { asClass, asFunction, asValue, createContainer, InjectionMode } from "awilix";
import { CalculatorService } from "../services/calculator.service";
import { PersonService } from "../services/person.service";

export const container = createContainer({
    injectionMode: InjectionMode.CLASSIC
});

container.register({
    calculatorService: asClass(CalculatorService).singleton(),
    personService: asClass(PersonService).singleton()
});