export default class Tuple {
    constructor(...elements) {
        this.elements = [];
        elements.forEach((element, index) => {
            this.elements[index] = element;
        });
    }
    get length() {
        const _length = this.elements.length;
        return _length;
    }
    static range(n, offset = 0) {
        if (n === 1)
            return new Tuple(offset);
        const tuple = new Tuple(...Array(n).keys());
        const keyToOffsetKey = (key) => key + offset;
        return offset ? tuple.map(keyToOffsetKey) : tuple;
    }
    toArray() {
        const array = this.elements;
        return array;
    }
    get(index) {
        const element = this.elements[index];
        return element;
    }
    set(index, element) {
        try {
            if (index >= this.elements.length) {
                throw new Error('Index out of range');
            }
            else if (typeof element !== typeof this.elements[index]) {
                throw new Error('Incorrect element type');
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
    includes(target) {
        const elementIsTarget = (element) => element === target;
        const result = this.elements.some(elementIsTarget);
        return result;
    }
    isUnique(tupleArray) {
        const includesEveryInstanceElement = (tuple) => {
            const elementIsIncludedInInstance = (element) => {
                return this.includes(element);
            };
            return tuple.every(elementIsIncludedInInstance);
        };
        return !tupleArray.some(includesEveryInstanceElement);
    }
    every(callback) {
        const result = this.elements.every(callback);
        return result;
    }
    map(callback) {
        const tuple = new Tuple(...this.elements.map(callback));
        return tuple;
    }
    reduce(reducer, initialValue = null) {
        const result = this.elements.reduce(reducer, initialValue);
        return result;
    }
}
