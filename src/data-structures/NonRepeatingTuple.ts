import { ICallback } from "../interfaces";

import Tuple from "./Tuple";

export default class NonRepeatingTuple extends Tuple {
    constructor (...elements: any[]) {
        const filteredElements: any[] = [];
        elements.forEach((element: any) => {
            if (!filteredElements.includes(element)) {
                filteredElements.push(element);
            }
        });
        super(...filteredElements);
    }

    static range (n: number, offset: number = 0): NonRepeatingTuple {
        const tuple             = Tuple.range(n, offset);
        const nonRepeatingTuple = new NonRepeatingTuple(...tuple.elements);
        return nonRepeatingTuple;
    }

    set (index: number, element: any): void {
        try {
            if (!this.elements[index]) {
                throw new Error('Index out of range');
            } else if (typeof element !== typeof this.elements[index]) {
                throw new Error('Incorrect element type');
            } else if (this.elements.includes(element)) {
                throw new Error('Element not unique');
            } else {
                this.elements[index] = element;
            }
        } catch (error: unknown) {
            console.error(error);
            return;
        }
    }

    map (callback: ICallback): NonRepeatingTuple {
        const nonRepeatingTuple: NonRepeatingTuple 
            = new NonRepeatingTuple(...this.elements.map(callback));
        return nonRepeatingTuple;
    }
}