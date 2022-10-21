class SuperArray extends Array {
    forMap (callback) {
        const array = new SuperArray(...this);
        for (let i = 0; i < this.length; i++) {
            array[i] = callback(this[i]);
        }
        return array;
    }
    
    whileMap (callback) {
        let   index = 0;
        const array = new SuperArray(...this);
        while (index < this.length) {
            array[index] = callback(this[index]); 
            index++;
        }
        return array;
    } 
}

module.exports = SuperArray;