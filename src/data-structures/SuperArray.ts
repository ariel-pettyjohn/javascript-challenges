interface IMapCallback {
    (x: any): any
};

class SuperArray extends Array {
    forMap (callback: IMapCallback): any[] {
        const array: SuperArray = new SuperArray(...this);
        for (let i = 0; i < this.length; i++) {
            array[i] = callback(this[i]);
        }
        return array;
    }
    
    whileMap (callback: IMapCallback): any[] {
        let   index: number     = 0;
        const array: SuperArray = new SuperArray(...this);
        while (index < this.length) {
            array[index] = callback(this[index]); 
            index++;
        }
        return array;
    } 
}

module.exports = SuperArray;