import {Age} from "./types";

export abstract class Creator {

    public abstract factoryMethod(): Age;

    public someOperation(): string {
        const product = this.factoryMethod();

        return `Creator return: ${product.calcAge()}`;
    }
}
