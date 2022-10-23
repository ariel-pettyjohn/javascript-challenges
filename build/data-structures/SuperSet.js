export default class SuperSet {
    constructor(elements) {
        this.elements = SuperSet.filterDuplicates(elements);
    }
    static filterDuplicates(array) {
        // TODO: replace with a recursive implementation
        const filteredArray = [];
        array.forEach((element) => {
            if (!filteredArray.includes(element)) {
                filteredArray.push(element);
            }
        });
        return filteredArray;
    }
}
