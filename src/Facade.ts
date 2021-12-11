import {Age} from "./types";

export class Facade {
    protected name: Name;
    protected age: Age | undefined;
    protected birth: Age | undefined

    constructor(name: Name, age?: Age, birth?: Age) {
        this.name = name;
        this.age = age;
        this.birth = birth;
    }

    public getUserDate(): string {
        let result = `Your name: ${this.name?.getFirstName()} ${this.name?.getLastName()} \n`;
        if (this.age) {
            result +=  `Your age: ${this.age.calcAge()}\n`;
        }
        if (this.birth) {
            result +=  `Your birth: ${this.birth.calcAge()}`;
        }

        return result;
    }
}


export class Name {
    private readonly firstName: string;
    private readonly lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }
}