export default class Random {
    static integer(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    static element(array) {
        const randomIndex = Random.integer(0, array.length - 1);
        return array[randomIndex];
    }
}
