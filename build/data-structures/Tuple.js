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
    /*
    static range (n: number, offset: number = 0): Tuple {
        if (n === 1) return new Tuple(offset);
        const tuple: Tuple = new Tuple(...Array(n).keys());
        const keyToOffsetKey = (key: number): number => key + offset;
        return offset ? tuple.map(keyToOffsetKey) : tuple;
    }
    */
    get(index) {
        const element = this.elements[index];
        return element;
    }
    set(index, element) {
        try {
            if (!this.elements[index]) {
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
}
