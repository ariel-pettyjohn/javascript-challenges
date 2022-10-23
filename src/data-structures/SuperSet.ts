export default class SuperSet {
    elements: any[];

    constructor (elements: any[]) {
        this.elements = SuperSet.filterDuplicates(elements);
    }

    static filterDuplicates (array: any[]) {
        // TODO: replace with a recursive implementation
        const filteredArray: any[] = [];
        array.forEach((element: any) => {
            if (!filteredArray.includes(element)) {
                filteredArray.push(element);
            }
        });
        return filteredArray;
    }
}