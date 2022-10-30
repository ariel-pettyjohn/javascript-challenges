import { ICallback } from "../interfaces";

export default class Tuple {
    protected elements: any[] = [];
    
    constructor (...elements: any[]) {
        elements.forEach((element: any, index: number) => {
            this.elements[index] = element;
        });   
    }
    
    get length (): number {
        const _length: number = this.elements.length;
        return _length;
    }

    static range (n: number, offset: number = 0): Tuple {
        if (n === 1) return new Tuple(offset);
        const tuple: Tuple = new Tuple(...Array(n).keys());
        const keyToOffsetKey = (key: number): number => key + offset;
        return offset ? tuple.map(keyToOffsetKey) : tuple;
    }

    toArray (): any[] {
        const array = this.elements;
        return array;
    }

    get (index: number): any {
        const element: any = this.elements[index];
        return element;
    }
   
    set (index: number, element: any): void | string {
        try {
            if (index >= this.elements.length) {
                throw new Error('Index out of range');
            } else if (typeof element !== typeof this.elements[index]) {
                throw new Error('Incorrect element type');
            } else {
                this.elements[index] = element;
            }
        } catch (error: unknown) {
            console.error(error);
            return error?.toString();
        }
    }

    includes (target: any): boolean {
        const elementIsTarget = (element: any) => element === target;
        const result: boolean = this.elements.some(elementIsTarget);
        return result;
    }

    isUnique (tupleArray: Tuple[]): boolean {
        const includesEveryInstanceElement = (tuple: any): boolean => {
            const elementIsIncludedInInstance = (element: any): boolean => {
                return this.includes(element);
            };
            return tuple.every(elementIsIncludedInInstance);
        }
        return !tupleArray.some(includesEveryInstanceElement);
    }

    every (callback: ICallback): boolean {
        const result: boolean = this.elements.every(callback);
        return result;
    }

    map (callback: ICallback): Tuple {
        const tuple: Tuple = new Tuple(...this.elements.map(callback));
        return tuple;
    }

    reduce (reducer: ICallback, initialValue: any = null): any {
        const result: any = this.elements.reduce(reducer, initialValue);
        return result;
    }
}