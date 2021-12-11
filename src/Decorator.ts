import {Age} from "./types";


export class GetAgeComponent implements Age {
    private readonly dateOfBirth: number;
    constructor(dateOfBirth: number) {
        this.dateOfBirth = dateOfBirth;
    }

    public calcAge(): number {
       return new Date().getFullYear() - this.dateOfBirth;
    }
}


class Decorator implements Age {
    protected component: Age;

    constructor(component: Age) {
        this.component = component;
    }

    public calcAge(): number {
        return this.component.calcAge();
    }
}

export class GetYearOfBirthDecorator extends Decorator {

    public calcAge(): number {
        return  2021 - super.calcAge();
    }
}


export class GetCurrYearDecorator extends Decorator {
    public calcAge(): number {
        return 24 + super.calcAge();
    }
}
