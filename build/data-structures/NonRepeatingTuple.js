import Tuple from "./Tuple";
export default class NonRepeatingTuple extends Tuple {
    constructor(...elements) {
        const filteredElements = [];
        elements.forEach((element) => {
            if (!filteredElements.includes(element)) {
                filteredElements.push(element);
            }
        });
        super(...filteredElements);
    }
    static fromTuple(tuple) {
        const nonRepeatingTuple = new NonRepeatingTuple(...tuple.toArray());
        return nonRepeatingTuple;
    }
    static range(n, offset = 0) {
        const tuple = Tuple.range(n, offset);
        const nonRepeatingTuple = NonRepeatingTuple.fromTuple(tuple);
        return nonRepeatingTuple;
    }
    set(index, element) {
        try {
            if (!this.elements[index]) {
                throw new Error('Index out of range');
            }
            else if (typeof element !== typeof this.elements[index]) {
                throw new Error('Incorrect element type');
            }
            else if (this.elements.includes(element)) {
                throw new Error('Element not unique');
            }
            else {
                this.elements[index] = element;
            }
        }
        catch (error) {
            console.error(error);
            return error?.toString();
        }
    }
    map(callback) {
        const nonRepeatingTuple = new NonRepeatingTuple(...this.elements.map(callback));
        return nonRepeatingTuple;
    }
}
