interface ISuperSet {
    elements: any[]
}

class SuperSet implements ISuperSet {
    elements: any[];

    constructor (elements: any[]) {
        this.elements = SuperSet.filterDuplicates(elements);
    }

    static filterDuplicates (array) {
        // TODO: replace with a recursive implementation
        const filteredArray: any[] = [];
        array.forEach((element) => {
            if (!filteredArray.includes(element)) {
                filteredArray.push(element);
            }
        });
        return filteredArray;
    }
}

module.exports = SuperSet;